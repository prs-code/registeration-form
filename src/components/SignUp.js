import React, {useState} from 'react';


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
            setData({...data, [event.target.name]: event.target.checked}) // check true or false
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data);
    };

    return (
        <div>
           <form>
                <h2>Registeration Form</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={changeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={data.password} onChange={changeHandler} />
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confirmpassword" value={data.confirmPass} onChange={changeHandler} />
                </div>
                <div>
                    <label>I accept all privicy policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} />
                </div>
                <div>
                    <a href="#">Login</a>
                    <button type="submit">sign up</button>
                </div>
           </form>
        </div>
    );
};

export default SignUp;