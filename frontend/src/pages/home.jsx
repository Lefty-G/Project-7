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
    const { state } = useContext(store);
    const loggedInUser = localStorage.getItem("userDetails");
    const foundUser = JSON.parse(loggedInUser);

    useEffect(() => {
        if (loggedInUser) {
            setUser(foundUser);
            console.log(foundUser);
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
                <Post />
            </div>
            </div>
        </>
    )
}




export default Home