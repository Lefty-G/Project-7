import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profilePicture from "../resources/grey-profile-picture.png"
import { useState, useContext } from 'react';
import { store } from '../store.js';
import axios from 'axios'


function Profile() {

    const userDetails = useContext(store).state.userDetails
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const id = userDetails.userId

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/api/auth/${userDetails.userId}`)
            .then(response => {
                console.log(`Deleted post with ID ${userDetails.userId}`);
            })
            .catch(err => {
                console.log(err);
            });
        // const user = this.state.user.filter(userDetails => userDetails.userId !== id);
        // this.setState({ user });
        
        setUser({});
        setEmail("");
        setPassword("");
        localStorage.clear();
    }

    return (
        <>
            <nav className="misc-nav">
                <Link to="/menu" className="misc-nav--back-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <h1 className="misc-nav--title__menu">Profile</h1>
            </nav>
            <div className="profile-card">
                <img src={profilePicture} alt="profile-picture" className="profile-card--picture" />
                <div id="username" className="profile-card--username">{userDetails.email}</div>

                <Link to="/" onClick={handleDelete} className='delete'>
                    <div className='delete--button'>Delete</div>
                </Link>
            </div>
        </>
    )
}

export default Profile