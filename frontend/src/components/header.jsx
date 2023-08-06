import logo from '../resources/icon-black.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header() {
    const [user, setUser] = useState();
    const loggedInUser = localStorage.getItem("userDetails");
    const foundUser = JSON.parse(loggedInUser);
    
    useEffect(() => {
        if (loggedInUser) {
            setUser(foundUser);
            console.log(foundUser);
        }
    }, []);

    const userLoggedIn = foundUser;

    return (
        <header className="header">

            <div className="header--logo">
                <img src={logo} className="header--black-logo" alt="header-logo"></img>
                <div className="header--title">Groupomania</div>
            </div>
                {userLoggedIn 
                ? <nav className="menu">
                    <FontAwesomeIcon icon={faBars} />
                </nav>
                : <nav className="nav-links">
                    <Link to="/" className="nav-links--login" >Login</Link>
                    <Link to="/sign-up" className="nav-links--signup" >Sign Up</Link>
                </nav>
}
        </header>

    )
}

export default Header