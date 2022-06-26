export const validate = (data) => { //errors handler(check data in form fields)
    const errors = {};

    if (!data.name.trim()) {
        errors.name = "Username is required!";
    } else {
        delete errors.name;
    };

    if (!data.email) {
        errors.email = "Email is required!";
    } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
        errors.email = "Email address is invalid!";
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = "Password is  required!";
    } else if (data.password.length < 6) {
        errors.password = "Password must be 6 caracter or more!";
    } else {
        delete errors.password;
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = "Repeat your password!";
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "You entered the wrong password!";
    } else {
        delete errors.confirmPassword;
    }

    if (data.isAccepted) {
        delete errors.isAccepted;
    } else {
        errors.isAccepted = "You must agree to the rules to enter";
    }
    return errors;
};