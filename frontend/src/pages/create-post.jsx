import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faImage, faVideo, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import profilePicture from "../resources/grey-profile-picture.png";
import { useState, useContext } from 'react';
import { store } from '../store.js';
import axios from 'axios'



function CreatePost() {

    const userDetails = useContext(store).state.userDetails;
    const [post, setPost] = useState([]);
    const [media, setMedia] = useState(null);
    const navigate = useNavigate();

    const handleInput = async (e) => {
        e.preventDefault()
        console.log(post)

        const postDetails = { post, id: userDetails.userId }
        let headers


        if (media) {
            const formData = new FormData();
            formData.append('media', media);
            console.log(postDetails)
            formData.append('post', JSON.stringify(postDetails));
            headers = {
                'Authorization': `Bearer ${userDetails.token}`,
                'Content-Type': 'multipart/form-data'
            }
            axios.post('http://localhost:3000/api/posts', formData, { headers })

        } else {
            headers = {
                'Authorization': `Bearer ${userDetails.token}`,
                'Content-Type': 'application/json'
            }
            axios.post('http://localhost:3000/api/posts', postDetails, { headers })
        }

        navigate("/home");
    }

    const handleMediaChange = (e) => {
        setMedia(e.target.files[0])
    }

    const handleCommentChange = (e) => {
        setPost(e.target.value)
    }

    return (
        <>
            <nav className="misc-nav">
                <Link to="/home" className="misc-nav--back-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <h1 className="misc-nav--title">Create a post</h1>
            </nav>
            <div className="post-container-body">
                <div className="post-container">
                    <div className="user-card">
                        <img src={profilePicture} alt="profile-picture" className="user-card--picture" />
                        <div id="username" className="user-card--username">{userDetails.email}</div>
                    </div>
                    <form onSubmit={handleInput}>
                        <textarea placeholder="Got something to say?" className="post-input" name="post" onChange={handleCommentChange} value={post}></textarea>
                        <div className="post-input-upload">
                            <input id="chooseFile"
                                aria-label="create post media input selector"
                                className="create-post__upload"
                                type="file"
                                accept="image/*,video/*,audio/*"
                                onChange={handleMediaChange}
                            />
                        </div>
                        <button type='submit' className="create-post--button">
                            Create post
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreatePost