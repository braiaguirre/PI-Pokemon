// STYLES
import styles from './Signup.module.css';

// DEPENDENCIES
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { getSignup, setPopup } from '../../redux/actions/actions';

const Signup = () => {
    document.title = 'PokeHenry > Signup';
    
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // STATES
    const [signupData, setSignupData] = useState({ username: '', email: '', password: '', image: '' });
    const [signupErrors, setSignupErrors] = useState({  username: '', email: '', password: '', confirm: '', image: ''  });

    // HANDLERS
    const signupHandler = () => dispatch(getSignup({ ...signupData }));
    const changeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setSignupData({ ...signupData, [key]: value });
        setSignupErrors({ ...signupData, [key]: value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(signupErrors).length) signupHandler();
        else dispatch(setPopup('Error', 'All fields are required', 'alert'));
    }
    const backHandler = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler }>
                <input
                    name="username"
                    onChange={ changeHandler }
                    placeholder="Username" 
                />
                <input
                    name="email"
                    onChange={ changeHandler }
                    placeholder="Email" 
                />
                <input
                    name="password"
                    type="password"
                    onChange={ changeHandler }
                    placeholder="Password" 
                />
            <button onClick={ backHandler }>Back</button>
            <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;