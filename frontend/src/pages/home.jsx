import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import Header from '../components/header'
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserGroup, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/post'


export default function Home() {
    const [posts, setPosts] = useState([]);
    const token = useContext(store).state.userDetails.token
    
    useEffect(() => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    axios
    .get(`http://localhost:3000/api/posts`, { headers})
    .then(res => {
        console.log(res.data)
        setPosts(res.data);
    })
    .catch(error => {
        console.log(error);
    });
}, [token]);

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
            {posts.map ((post)=>(
                <Post key={post.id} post={post} />
            ))}
            </div>
            </div>
        </>
    )
}
