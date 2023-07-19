import logo from '../resources/icon-black.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header--logo">
                    <img src={logo} className="header--black-logo" alt="header-logo"></img>
                    <div className="header--title">Groupomania</div>
                </div>
                <nav className="nav-links">
                    <Link to="/" className="nav-links--login" >Login</Link>
                    <Link to="/sign-up" className="nav-links--signup" >Sign Up</Link>
                </nav>
            </header>
        </>
    )
}

export default Header