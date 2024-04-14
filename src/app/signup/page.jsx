import React from 'react';
import classes from './signup.module.css';

const SignUp = () => {
    return (
        <div className={classes.container}>
            <div className={classes.signupForm}>
                <h1 className={classes.title}>Sign Up</h1>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <input type="email" placeholder='Email Address' />
                <input type="number" placeholder='Phone Number' />
                <input type="text" placeholder='Address' /><br />
                <button className={classes.signupBtn}>Submit form</button>
            </div>
        </div>
    )
}

export default SignUp;