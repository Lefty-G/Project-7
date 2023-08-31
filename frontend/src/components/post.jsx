import { useState, useContext, useEffect } from 'react';
import { store } from '../store.js';
import profilePicture from "../resources/grey-profile-picture.png";
import axios from 'axios';


export default function Post({body = "Post", images = "image"}) {
    const userDetails = useContext(store).state.userDetails;
    const [posts, setPosts] = useState('');


    return (
        <div className="home-post-container">
            <div className="user-info">
                <img src={profilePicture} alt="profile-picture" className="profile-picture"></img>
                <div className="profile-name">{userDetails.email}</div>
            </div>
            <div className="post-display">
                <p>{body}</p>
                <img>{images}</img>
            </div>
        </div>
    )
}

