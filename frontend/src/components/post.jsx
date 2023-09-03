import { useContext} from 'react';
import { store } from '../store.js';
import profilePicture from "../resources/grey-profile-picture.png";
// const postBody = useContext(store).state.posts.post


export default function Post({post}) {
    const userDetails = useContext(store).state.userDetails;
    console.log(post)

    //TODO create a func that gets extension post.imageUrl, if returns emtpy return null.



    return (
        <div className="home-post-container">
            <div className="user-info">
                <img src={profilePicture} alt="profile-picture" className="profile-picture"/>
                <div className="profile-name">{userDetails.email}</div>
            </div>
            <div className="post-display">
                <p>{post.post}</p>
                //TODO conditonal render post.imageUrl based on its extension/if it exists
                <img src={post.imageUrl} />
            </div>
        </div>
    )
}

