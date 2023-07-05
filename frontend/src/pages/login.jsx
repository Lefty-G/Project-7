import './login.css';

function Login() {
    return (
        
        <div classname="input-container">
            <h1 classname="login-title">Login</h1>
            <div classname="email-input">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div classname="password-input">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div classname="submit-button">
                <input type="submit" value="Login" />
            </div>
            <a classname="signup-link" href="#">
                Sign Up
            </a>
        </div>
    )
}


export default Login