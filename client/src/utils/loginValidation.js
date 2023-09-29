const loginValidation = (loginData) => {
    const { userOrEmail, password } = loginData;
    return !userOrEmail.length || !password.length ? true : false;
}

export default loginValidation;