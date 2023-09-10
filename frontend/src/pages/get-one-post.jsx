import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect, useContext } from 'react';
import MiscNav from '../components/misc-nav'
import { store } from '../store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserGroup, faMessage, faBell, faArrowLeft, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import profilePicture from "../resources/grey-profile-picture.png"

export default function GetOnePost({ post }) {
    const userDetails = useContext(store).state.userDetails;
    const [onePost, setOnePost] = useState([]);
    const token = useContext(store).state.userDetails.token;

    const { id } = useParams();

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const getPost = async () => {
            let res = await axios.get(`http://localhost:3000/api/posts/${id}`, { headers })
            setOnePost(res.data);
        }
        const markPostRead = async () => {
            const body = { userId: userDetails.userId }
            console.log(body)
            await axios.post(`http://localhost:3000/api/posts/${id}/read`, body, { headers })
        }
        try {
            getPost()
            markPostRead()
        } catch (error) {
            
            console.log(error);
        };
    }, [token]);


    function getExtension(imageUrl) {
        let result = null;
        if (imageUrl) {
            result = imageUrl.split('.').pop();
        }
        return result
    }



    return (
        <>
            <nav className="misc-nav">
                <Link to="/home" className="misc-nav--back-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <h1 className="misc-nav--title__menu">Post</h1>
            </nav>
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
            <div className="one-post-container">
                <div className="user-info">
                    <img src={profilePicture} alt="profile-picture" className="user-info--profile-picture" />
                    <div className="user-info--profile-name">{userDetails.email}</div>
                </div>
                <div className="one-post-display">
                    {onePost.imageUrl &&
                        <div className="one-media-display">
                            {["png", "jpg"].includes(getExtension(onePost.imageUrl)) &&
                                <img src={onePost.imageUrl} className="one-media-display--media" />
                            }
                            {["mp4"].includes(getExtension(onePost.imageUrl)) &&
                                <video src={onePost.imageUrl} controls className="one-media-display--media" />
                            }
                            {["mp3"].includes(getExtension(onePost.imageUrl)) &&
                                <audio src={onePost.imageUrl} controls className="one-media-display--media" />
                            }
                        </div>
                    }
                    <p className="one-post-display--body">{onePost.post}</p>
                </div>
                <div className="post-feedback">
                    <div className="post-feedback--likes-area">
                        <FontAwesomeIcon className="post-feedback--icon-like" icon={faThumbsUp} />
                        <div className="post-feedback--total-likes">0</div>
                    </div>
                    <div className="post-feedback--likes-area">
                        <FontAwesomeIcon className="post-feedback--icon-dislike" icon={faThumbsDown} />
                        <div className="post-feedback--total-likes">0</div>
                    </div>
                    <div className="post-feedback--add-comment">Add comment</div>
                </div>
            </div>
        </>
    )
}

