
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState, useContext, useEffect } from 'react';
import { store } from '../store.js';
import Header from '../components/header'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { state, dispatch } = useContext(store);
    const [user, setUser] = useState();
    const handleClick = async (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        const userDetails = { email, password }
        try {
            const res = await axios.post("http://localhost:3000/api/auth/login",
                userDetails
            )
            setUser(res.data)
            dispatch({ type: "CHANGE_USER", payload: res.data });
            navigate("/home");
        } catch (err) {
            console.log(err)
        }
    };
    

    return (
        <>
            <Header />
            <div className="index-page-container">
                <form className="input-container" onSubmit={handleClick}>
                    <h1 className="input-container--title">Login</h1>
                    <div className="email-input">
                        <label htmlFor="email" className="email-input--title">Email:</label>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" required />
                    </div>
                    <div className="password-input">
                        <label htmlFor="password" className="password-input--title">Password:</label>
                        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" required />
                    </div>
                    <div className="submit-button-login">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="input-container--statement">Don't have an account?&nbsp;
                        <Link to="/sign-up" className="input-link" >
                            Sign Up
                        </Link>
                        &nbsp;here</div>
                </form>
            </div>
        </>
    )
}


export default Login



