import { useState, useContext } from 'react';
import { store } from '../store.js';
import profilePicture from "../resources/grey-profile-picture.png"

function Post (){

    const userDetails = useContext(store).state.userDetails

    return(
        <div className="home-post-container">
            <div className="user-info">
                <img src={profilePicture} alt="profile-picture" className="profile-picture"></img>
                <div className="profile-name">{userDetails.email}</div>
            </div>
            <div className="post-display">
                
            </div>
        </div>
    )
}

export default Post