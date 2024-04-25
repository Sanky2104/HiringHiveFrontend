import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import { Link, Navigate } from "react-router-dom";
import './styles/style.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false); // State to track authentication status

    const onSubmit = (event) => {
        event.preventDefault();
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
                setLoggedIn(true); // Set loggedIn to true upon successful authentication
            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            },
        });
    };

    // If loggedIn is true, redirect to "/home" using <Navigate>
    if (loggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <Link to="/register" className="link">Register Instead</Link>
        </div>
    );
};

export default Login;
