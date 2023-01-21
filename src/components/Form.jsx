import React, { useState } from 'react';
import styles from './Form.module.css'

const Form = () => {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    return (
        <>
            <form>
                <div className={styles.box}>
                    <label>First Name</label>
                    <input type='text' onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className={styles.box}>
                    <label>Last Name</label>
                    <input type='text' onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className={styles.box}>
                    <label>Email</label>
                    <input type='email' onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className={styles.box}>
                    <label>Password</label>
                    <input type='password' onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className={styles.box}>
                    <label>Confirm Password</label>
                    <input type='password' onChange={e => setConfirmPass(e.target.value)}/>
                </div>
            </form>
            <div className={styles.data}>
                <h3>Your Form Data</h3>
                <section>
                    <p>First Name:</p>
                    <span>{firstName}</span>
                </section>
                <section>
                    <p>Last Name:</p>
                    <span>{lastName}</span>
                </section>
                <section>
                    <p>Email:</p>
                    <span>{email}</span>
                </section>
                <section>
                    <p>Password:</p>
                    <span>{password}</span>
                </section>
                <section>
                    <p>Confirm Password:</p>
                    <span>{confirmPass}</span>
                </section>
            </div>
        </>
    );
}

export default Form;