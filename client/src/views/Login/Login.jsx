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
    const [loginData, setLoginData] = useState({ userOrEmail: '', password: '' });
    const [loginErrors, setLoginErrors] = useState(true);

    // HANDLERS
    const loginHandler = () => dispatch(getLogin({ ...loginData }));
    const changeHandler = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        setLoginErrors(loginValidation(loginData));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!loginErrors) loginHandler();
        else dispatch(setPopup({
            title: 'Hey!',
            message: 'Both fields are required',
            type: 'alert'
        }));
    }
    const signupHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    
    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler }>
                <input
                    name="userOrEmail"
                    onChange={ changeHandler }
                    placeholder="Username or email" 
                />
                <input
                    name="password"
                    type="password"
                    onChange={ changeHandler }
                    placeholder="Password" 
                />
            <button>Log In</button>
            <button onClick={ signupHandler }>Sign Up</button>
            </form>
        </div>
    );
}

export default Login;