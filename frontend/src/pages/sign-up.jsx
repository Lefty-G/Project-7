import { Link } from 'react-router-dom';


function SignUp() {
    return (
        <div className="page-container">
            <div className="input-container">
                <h1 className="input-title">Sign Up</h1>
                <div className="email-input">
                    <label for="email" className="email-title">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div className="password-input">
                    <label for="password" className="password-title">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Sign Up" />
                </div>
                <div className="input-statement">Already have an account?&nbsp;
                    <Link to="/" className="input-link" >
                        Login
                    </Link>
                    &nbsp;here</div>
            </div>
        </div>
    )
}

export default SignUp