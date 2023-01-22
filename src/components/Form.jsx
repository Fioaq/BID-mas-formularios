import React from 'react';
import styles from './Form.module.css';

const Form = props => {
    const {input, setInput} = props;
    const {firstName, lastName, email, password, confirmPass} = props.input;
    
    const info= e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    return (
        <form>
            <div className={styles.box}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' name='firstName' onChange={info}/>
            </div>
            {
                firstName.length > 0 && firstName.length < 2 ?
                <h4>First Name must be at least 2 characters.</h4> :
                ''
            }
            <div className={styles.box}>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' name='lastName' onChange={info}/>
            </div>
            {
                lastName.length > 0 && lastName.length < 2 ?
                <h4>Last Name must be at least 2 characters.</h4> :
                ''
            }
            <div className={styles.box}>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' onChange={info}/>
            </div>
            {
                email.length > 0 && email.length < 5 ?
                <h4>Email must be at least 5 characters.</h4> :
                ''
            }
            <div className={styles.box}>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' onChange={info}/>
            </div>
            {
                password.length > 0 && password.length < 8 ?
                <h4>Password must be at least 8 characters.</h4> :
                ''
            }
            <div className={styles.box}>
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input type='password' name='confirmPass' onChange={info}/>
            </div>
            {
                password === confirmPass && confirmPass.length > -1  ?
                '' :
                <h4>Passwords must match</h4>
            }
        </form>
    );
}

export default Form;