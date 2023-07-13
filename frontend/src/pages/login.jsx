import backgroundImage from '../resources/index-background.jpg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="page-container">
            {/* <img source={backgroundImage} classname="background-image" alt="background-image"></img> */}
            <div className="input-container">
                <h1 className="input-title">Login</h1>
                <div className="email-input">
                    <label for="email" className="email-title">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="password-input">
                    <label for="password" className="password-title">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="submit-button">
                    <input type="submit" value="Login" />
                </div>
                <div className="input-statement">Don't have an account?&nbsp;  
                <Link to="/sign-up" className="input-link" >
                Sign Up
                 </Link>
                 &nbsp;here</div>
            </div>
        </div>
    )
}


export default Login