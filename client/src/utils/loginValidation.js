const loginValidation = (loginData) => {
    const { emailOrUser, password } = loginData;
    return !emailOrUser.length || !password.length ? true : false;
}

export default loginValidation;