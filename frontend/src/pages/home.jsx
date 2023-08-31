import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import Header from '../components/header'
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserGroup, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/post'


function Home() {
    const [user, setUser] = useState();
    const loggedInUser = localStorage.getItem("userDetails");
    const foundUser = JSON.parse(loggedInUser);
    const [posts, setPosts] = useState([]);
    const userDetails = useContext(store).state.userDetails;
    let headers
    // const postDetails = { post, id : userDetails.userId }
    // const [post, setPost] = useState([]);

    const getAllPosts = () => {
        
        headers = {
            'Authorization': `Bearer ${userDetails.token}`,
        }
        axios.get(`http://localhost:3000/api/posts`, { headers })
            .then(res => {
                setPosts(res.data)
                console.log(posts)
            })
            .catch(error => { console.log(error) })
    }

    useEffect(() => {
        getAllPosts()
        console.log(posts)
    }, []);
    
    useEffect(() => {
        if (loggedInUser) {
            setUser(foundUser);
        }
    }, []);

    return (
        <>
            <Header />
            <div className="home-page-container">
            <div className="home-logos">
                <div className="home-logos--home">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <div className="home-logos--friends">
                <FontAwesomeIcon icon={faUserGroup} />
                </div>
                <div className="home-logos--messages">
                <FontAwesomeIcon icon={faMessage} />
                </div>
                <div className="home-logos--notifications">
                <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
            <div className="create-a-post">
               <Link to="/create-post" className="create-a-post--button">
                    Create a post 
                </Link>
            </div>
            <div className="post-area">
            {posts.map ((post)=>{
                <Post key={post.id} post={post.post} />
            })}
            </div>
            </div>
        </>
    )
}




export default Home