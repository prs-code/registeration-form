import React, {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {validate} from "./validate";
import { notify } from './toast';
import styles from "./signUp.module.css"


const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });

    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked}) // if user click checkbox checked it(true or false)
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    };


    const [error, setError] = useState({});//access to errors object
    const [touch, setTouch] = useState({});//to prevent error display during the first mounting!

    const focusHandler = (event) => {
        setTouch({...touch, [event.target.name]: true})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        notify();
        if (!Object.keys(error).length) {
            notify("Sign Up Successfully", "success")
        } else {
            notify("Invalid data", "error")
            setTouch({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }

    useEffect(() => { //handle any error with data change (form field information)
        setError(validate(data))
    }, [data, touch]);


    return (
        <div className={styles.container}>
           <form onSubmit={submitHandler} className={styles.form}>
                <h2 className={styles.header}>Registeration Form</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input 
                            className={(error.name && touch.name) ? styles.uncompleted : styles.formInput} 
                            type="text" 
                            name="name" 
                            value={data.name} 
                            onChange={changeHandler} 
                            onFocus={focusHandler} 
                        />
                    {error.name && touch.name && <span>{error.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                        className={(error.email && touch.email) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="email" 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                    />
                    {error.email && touch.email && <span>{error.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input 
                        className={(error.password && touch.password) ? styles.uncompleted : styles.formInput} 
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                    />
                    {error.password && touch.password && <span>{error.password}</span>}

                </div>
                <div className={styles.formField}>
                    <label>Confirm password</label>
                    <input 
                        className={(error.confirmPassword && touch.confirmPassword) ? styles.uncompleted : styles.formInput} 
                        type="password" 
                        name="confirmPassword" 
                        value={data.confirmPassword} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                    />
                    {error.confirmPassword && touch.confirmPassword && <span>{error.confirmPassword}</span>}

                </div>
                <div className={styles.formField}>
                    <label>I accept all privicy policy</label>
                    <input 
                        className={styles.chbox} 
                        type="checkbox" 
                        name="isAccepted" 
                        value={data.isAccepted} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                    />
                    {error.isAccepted && touch.isAccepted && <span>{error.isAccepted}</span>}

                </div>
                <div className={styles.Btn}>
                    <a href="#">Login</a>
                    <button type="submit" >sign up</button>
                </div>
           </form>
           <ToastContainer />
        </div>
    );
};

export default SignUp;