import { useContext } from 'react';
import { store } from '../store.js';
import profilePicture from "../resources/grey-profile-picture.png";


export default function Post({ post }) {
    const userDetails = useContext(store).state.userDetails;
    console.log(post)

    //TODO create a func that gets extension post.imageUrl, if returns emtpy return null.

    //TODO conditonal render post.imageUrl based on its extension/if it exists

    return (
        <div className="home-post-container">
            <div className="user-info">
                <img src={profilePicture} alt="profile-picture" className="profile-picture" />
                <div className="profile-name">{userDetails.email}</div>
            </div>
            <div className="post-display">
                <p className="post-body">{post.post}</p>
                <div className="media-display">
                    {<img src={post.imageUrl} />}
                    {<video>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                    </video>}
                </div>
            </div>
        </div>
    )
}

