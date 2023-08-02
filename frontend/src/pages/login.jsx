
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { store } from '../store.js';



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(store);
    const [ user, setUser] = useState();
    const handleClick = async (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        const userDetails = { email, password }
        try {
            const res = await axios.post("http://localhost:3000/api/auth/login",
                userDetails
            );
        setUser(res.data)
        localStorage.setItem('userDetails', res.data)
        console.log(res.data)

            dispatch({ type: "CHANGE_COLOR", payload: "blue" });
            console.log(state.color)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userDetails");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);


    return (
            <div className="index-page-container">
                <div className="input-container">
                    <h1 className="input-container--title">Login</h1>
                    <div className="email-input">
                        <label for="email" className="email-input--title">Email:</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" required />
                    </div>
                    <div className="password-input">
                        <label for="password" className="password-input--title">Password:</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" required />
                    </div>
                    <div className="submit-button-login">
                        <input onClick={handleClick} type="submit" value="Login" />
                    </div>
                    <div className="input-container--statement">Don't have an account?&nbsp;
                        <Link to="/sign-up" className="input-link" >
                            Sign Up
                        </Link>
                        &nbsp;here</div>
                </div>

            </div>
    )
}


export default Login