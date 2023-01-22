import React from 'react';
import styles from './FormData.module.css'

const FormData = props => {
    const {firstName, lastName, email, password, confirmPass} = props.data;
    
    return (
        <div className={styles.data}>
        <h3>Your Form Data</h3>
        <section>
            <p><strong>First Name:</strong> {firstName}</p>
        </section>
        <section>
            <p><strong>Last Name:</strong> {lastName}</p>
        </section>
        <section>
            <p><strong>Email:</strong> {email}</p>
        </section>
        <section>
            <p><strong>Password:</strong> {password}</p>
        </section>
        <section>
            <p><strong>Confirm Password:</strong> {confirmPass}</p>
        </section>
    </div>
    )
};

export default FormData;