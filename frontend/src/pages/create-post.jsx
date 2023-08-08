import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faImage, faVideo, faMicrophone, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import profilePicture from "../resources/grey-profile-picture.png"

function CreatePost() {

    const getUserDetails = JSON.parse(localStorage.getItem('userDetails'));

    console.log(getUserDetails);

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
                    <div id="username" className="user-card--username">Username</div>
                </div>
                <form>
                    <textarea placeholder="Got something to say?" className="post-input"></textarea>
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
                        <div className="create-post--button">
                            Create post
                        </div>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default CreatePost