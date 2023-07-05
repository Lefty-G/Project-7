import logo from '../resources/icon-left-font-monochrome-black.png';
import '../App.css'

function Header() {
    return (
        <>
            <header classname="header">
                <img src={logo} classname="header-logo" alt="header-logo"></img>
                <nav classname="nav-links">
                    <div classname="login-nav">Login</div>
                    <div classname="signup-nav">Sign Up</div>
                </nav>
            </header>
        </>
    )
}

export default Header