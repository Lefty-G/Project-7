import {Header} from './components/header.jsx'
import './login.css';




function Login() {
    return (
        <Header />,
        <div classname="input-container">
            <h1 classname="signup-title">Sign Up</h1>
            <div classname="email-input">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div classname="password-input">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <div classname="submit-button">
                <input type="submit">Sign Up</input>
            </div>
            <a classname="login-link" href="#">
                Login
            </a>
        </div>
    )
}

