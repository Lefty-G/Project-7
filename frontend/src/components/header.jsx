import logo from '../resources/icon-black.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={logo} className="black-logo" alt="header-logo"></img>
                    <div className="header-title">Groupomania</div>
                </div>
                <nav className="nav-links">
                    <Link to="/" className="login-nav" >Login</Link>
                    <Link to="/sign-up" className="signup-nav" >Sign Up</Link>
                </nav>
            </header>
        </>
    )
}

export default Header