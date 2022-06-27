import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styles from "./signIn.module.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {validate} from "./validate";
import { notify } from './toast';


const SignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (event) => {
            setData({...data, [event.target.name]: event.target.value})
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
            notify("Loged in Successfully", "success")
        } else {
            notify("Invalid data", "error")
            setTouch({
                email: true,
                password: true,
            })
        }
    }

    useEffect(() => { //handle any error with data change (form field information)
        setError(validate(data,"SignIn"))
    }, [data, touch]);


    return (
        <div className={styles.container}>
           <form onSubmit={submitHandler} className={styles.form}>
                <h2 className={styles.header}>Login Form</h2>
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
                <div className={styles.Btn}>
                    <button type="submit" >Login</button>
                    <Link to="/SignUp">sign up</Link>
                </div>
           </form>
           <ToastContainer />
        </div>
    );
};

export default SignIn;