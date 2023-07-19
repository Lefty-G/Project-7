import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import backgroundImage from '../resources/index-background.jpg';


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = async (e) => {
        e.preventDefault();
        console.log('The link was clicked.');

        try {
            const res = await axios.post("http://localhost:3000/api/auth/signup", {
                email,
                password
            })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    
    return (
        <div className="page-container">
            <img src={backgroundImage} className="background-image" alt="background-image"></img>
            <div className="input-container">
                <h1 className="input-container--title">Sign Up</h1>
                <div className="email-input">
                    <label for="email" className="email-input--title">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" required></input>
                </div>
                <div className="password-input">
                    <label for="password" className="password-input--title">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" required></input>
                </div>
                <div className="submit-button-signup">
                    <input type="submit" onClick={handleClick} value="Sign Up" />
                </div>
                <div className="input-container--statement">Already have an account?&nbsp;
                    <Link to="/" className="input-link" >
                        Login
                    </Link>
                    &nbsp;here</div>
            </div>
        </div>
    )
}

export default SignUp