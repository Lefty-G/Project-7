import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faImage, faUserGroup, faGear, faMessage, faPeopleGroup, faCartShopping, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import profilePicture from "../resources/grey-profile-picture.png"
import { useState, useContext } from 'react';
import { store } from '../store.js';

function Menu() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    const handleLogout = () => {
        setUser({});
        setEmail("");
        setPassword("");
        localStorage.clear();
    };


    const userDetails = useContext(store).state.userDetails

    console.log(userDetails);

    return (
        <>
            <nav className="misc-nav">
                <Link to="/home" className="misc-nav--back-arrow">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <h1 className="misc-nav--title__menu">Menu</h1>
            </nav>
            <div className='menu-container'>
                <div className='user-details'>
                    <img src={profilePicture} alt="profile-picture" className="user-details--picture" />
                    <div id="username" className="user-details--username">{userDetails.email}</div>
                    <div className="user-details--text">View your profile</div>
                </div>
                <div className='menu-cards'>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faUserGroup} />
                        <div className='menu-cards--title'>Friends</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faMessage} />
                        <div className='menu-cards--title'>Messages</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faPeopleGroup} />
                        <div className='menu-cards--title'>Groups</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faImage} />
                        <div className='menu-cards--title'>Photos</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faCalendarDays} />
                        <div className='menu-cards--title'>Events</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faUserGroup} />
                        <div className='menu-cards--title'>Pages</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faCartShopping} />
                        <div className='menu-cards--title'>Shop</div>
                    </div>
                    <div className='menu-cards--card'>
                        <FontAwesomeIcon className="menu-cards--icon" icon={faGear} />
                        <div className='menu-cards--title'>Settings</div>
                    </div>
                </div>
                <Link to="/" onClick={handleLogout} className='logout'>
                    <div className='logout--button'>Logout</div>
                </Link>
            </div>
        </>
    )
}

export default Menu