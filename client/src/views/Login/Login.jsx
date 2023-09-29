// STYLES
import styles from './Login.module.css';

// DEPENDENCIES
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { getLogin, setPopup } from '../../redux/actions/actions';

// UTILS
import loginValidation from '../../utils/loginValidation';

const Login = () => {
    document.title = 'PokeHenry > Login';

    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // STATES
    const [loginData, setLoginData] = useState({ emailOrUser: '', password: '' });
    const [loginErrors, setLoginErrors] = useState(true);

    // HANDLERS
    const loginHandler = () => dispatch(getLogin({ ...loginData }));
    const changeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setLoginData({ ...loginData, [key]: value });
        setLoginErrors(loginValidation({ ...loginData, [key]: value }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!loginErrors) loginHandler();
        else dispatch(setPopup('Hey!', 'Both fields are required', 'alert'));
    }
    const signupHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler }>
                <input
                    name="emailOrUser"
                    onChange={ changeHandler }
                    placeholder="Username or email" 
                />
                <input
                    name="password"
                    type="password"
                    onChange={ changeHandler }
                    placeholder="Password" 
                />
            <button onClick={ signupHandler }>Sign Up</button>
            <button>Log In</button>
            </form>
        </div>
    );
}

export default Login;