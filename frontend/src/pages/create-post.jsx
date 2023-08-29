import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faImage, faVideo, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import profilePicture from "../resources/grey-profile-picture.png";
import Post from '../components/post';
import { useState, useContext } from 'react';
import { store } from '../store.js';
import axios from 'axios'



function CreatePost() {

    const userDetails = useContext(store).state.userDetails;
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [media, setMedia] = useState(null);
    const navigate = useNavigate();


    const addComment = async (e) => {
        e.preventDefault()
        console.log(comment);
        const timestamp = Date.now()

        if(media) {
            //TODO use form data with axios to submit request to backend
        }else{
            //TODO use JSON with axios to submit request to backend
        }

        navigate("/home");
    }

    const handleMediaChange = (e) => {
        setMedia(e.target.file[0])
    }
    
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    return (
        <>
            <nav className="misc-nav">
                <Link to="/home" className="misc-nav--back-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <h1 className="misc-nav--title">Create a post</h1>
            </nav>
            <div className="post-container">
                <div className="user-card">
                    <img src={profilePicture} alt="profile-picture" className="user-card--picture" />
                    <div id="username" className="user-card--username">{userDetails.email}</div>
                </div>
                <form onSubmit={addComment}>
                    <textarea placeholder="Got something to say?" className="post-input" name="comment" onChange={handleCommentChange} value={comment}></textarea>
                    <div className="post-input-additions">
                        <input
                            aria-label="create post media input selector"
                            className="create-post__upload"
                            type="file"
                            accept="image/*,video/*,audio/*"
                            onChange={handleMediaChange}
                        />
                        <div className="post-input-additions--container">
                            <FontAwesomeIcon className="post-input-additions--container__logo" icon={faImage} />
                            <div className="post-input-additions--container__text">Photos</div>
                        </div>
                        <div className="post-input-additions--container">
                            <FontAwesomeIcon className="post-input-additions--container__logo" icon={faVideo} />
                            <div className="post-input-additions--container__text">Video</div>
                        </div>
                        <div className="post-input-additions--container">
                            <FontAwesomeIcon className="post-input-additions--container__logo" icon={faMicrophone} />
                            <div className="post-input-additions--container__text">Audio</div>
                        </div>
                        <div className="post-input-additions--container">
                            <FontAwesomeIcon className="post-input-additions--container__logo" icon={faUser} />
                            <div className="post-input-additions--container__text">Tag friends</div>
                        </div>
                    </div>
                    <button type='submit' className="create-post--button">
                        Create post
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreatePost