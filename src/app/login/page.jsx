import React from 'react';
import classes from './login.module.css';

const Login = () => {
    return (
        <div className={classes.container}>
            <div className={classes.loginForm}>
                <h1 className={classes.title}>Log in</h1>
                <input type="text" placeholder="Username" /><br />
                <input type="password" placeholder="Password" /><br />
                <button className={classes.loginBtn}>Login</button>
            </div>
        </div>

    )
}

export default Login;