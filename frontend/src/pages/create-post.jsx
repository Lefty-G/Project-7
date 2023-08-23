import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faImage, faVideo, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import profilePicture from "../resources/grey-profile-picture.png";
import Post from '../components/post';
import { useState, useContext } from 'react';
import { store } from '../store.js';
import Ably from "ably";


function CreatePost() {

    const userDetails = useContext(store).state.userDetails

    const addComment = async (e) => {
        // Prevent the default behaviour of form submit
        e.preventDefault()
        // Get the value of the comment box
        // and make sure it not some empty strings
        const comment = e.target.elements.comment.value.trim()
        const name = e.target.elements.name.value.trim()
        // Get the current time.
        const timestamp = Date.now()
        // Make sure name and comment boxes are filled
        if (name && comment) {
          const commentObject = { name, comment, timestamp }
          // Publish comment
          const channel = Ably.channels.get("comments")
          channel.publish("add_comment", commentObject, (err) => {
            if (err) {
              console.log("Unable to publish message err = " + err.message)
            }
          })
          // Clear input fields
          e.target.elements.name.value = ""
          e.target.elements.comment.value = ""
        }
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
                    <textarea placeholder="Got something to say?" className="post-input" name="comment"></textarea>
                    <div className="post-input-additions">
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
                    <Link to="/home" className="create-post">
                        <button className="create-post--button">
                            Create post
                        </button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default CreatePost