// STYLES
import styles from './Login.module.css';

// DEPENDENCIES
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { getLogin, setAlert } from '../../redux/actions/actions';

// UTILS
import loginValidation from '../../utils/loginValidation';
import logo from '../../assets/logo.png'

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
        else dispatch(setAlert({
            title: 'Hey!',
            message: 'Both fields are required',
            type: 'ALERT'
        }));
    }
    const signupHandler = (e) => {
        e.preventDefault();
        navigate('/signup');
    }
    
    return (
        <form className={ styles.container } onSubmit={ submitHandler }>
            <img src={ logo }/>
            <div className={ styles.fields }>
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
            </div>
            <div className={ styles.buttons }>
                <button onClick={ signupHandler }>Sign Up</button>
                <button>Log In</button>
            </div>
        </form>
    );
}

export default Login;