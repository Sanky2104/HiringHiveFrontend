import React, { useState } from 'react';
import UserPool from '../UserPool';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    };

    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit">Signup</button>
                </form>
                <Link to="/login">Login Instead</Link>
            </div>
        </div>
    );
};

export default Signup;
