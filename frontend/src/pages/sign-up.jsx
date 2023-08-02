import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';



function SignUp() {
    const navigate = useNavigate();
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
            navigate("/");
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="index-page-container">
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