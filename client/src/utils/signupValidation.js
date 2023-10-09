const signupValidation = (signupData) => {
    const { username, email, password, confirm, image } = signupData;
    const errors = {};

    const usernameRegex = /([a-z0-9\.]{5,15}$)/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/;

    if (!usernameRegex.test(username)) errors.username = 'A-Z, a-z, 0-9 and dots only. Between 5 and 15 characters.';
    if (!emailRegex.test(email)) errors.email = 'Enter a valid email.';
    if (!passwordRegex.test(password)) errors.password = 'At least 1 number. Between 5 and 15 characters';
    if (confirm !== password) errors.confirmPassword = 'Passwords does not match.';
    if (!confirm.length) errors.confirmPassword = 'Passwords does not match.';
    console.log(errors);
    return errors;
}

export default signupValidation;