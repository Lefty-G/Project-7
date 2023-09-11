import { useContext, useEffect, useState } from 'react';
import { store } from '../store.js';
import profilePicture from "../resources/grey-profile-picture.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Post({ post }) {
    const userDetails = useContext(store).state.userDetails;

    function getExtension(imageUrl) {
        let result = null;
        if (imageUrl) {
            result = imageUrl.split('.').pop();
        }
        return result
    }


    return (
        <div className="home-post-container">
            <div className="user-info">
                <div className="user-info--details">
                    <img src={profilePicture} alt="profile-picture" className="user-info--profile-picture" />
                    <div className="user-info--profile-name">{userDetails.email}</div>
                </div>
                {post.usersRead.includes(userDetails.userId) &&
                    <FontAwesomeIcon className="read-eye" title="Post read" icon={faEye} />}
            </div>
            <div className="post-display">
                <p className="post-display--body">{post.post}</p>
                {post.imageUrl &&
                    <div className="media-display">
                        {["png", "jpg"].includes(getExtension(post.imageUrl)) &&
                            <img src={post.imageUrl} className="media-display--media" />
                        }
                        {["mp4"].includes(getExtension(post.imageUrl)) &&
                            <video src={post.imageUrl} controls className="media-display--media" />
                        }
                        {["mp3"].includes(getExtension(post.imageUrl)) &&
                            <audio src={post.imageUrl} controls className="media-display--media" />
                        }
                    </div>
                }
                <Link to={`/get-post/${post.id}`} className="view-post">...view post</Link>
            </div>
        </div>
    )
}

