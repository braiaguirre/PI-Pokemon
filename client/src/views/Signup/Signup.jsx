// STYLES
import styles from './Signup.module.css';

// DEPENDENCIES
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { getSignup, setPopup } from '../../redux/actions/actions';

// UTILS
import signupValidation from '../../utils/signupValidation';

const Signup = () => {
    document.title = 'PokeHenry > Signup';
    
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // STATES
    const [signupData, setSignupData] = useState({
        username: '', 
        email: '', 
        password: '', 
        confirm: '',
        image: 'asd' 
    });
    const [signupErrors, setSignupErrors] = useState({
        username: 'A-Z, a-z, 0-9 and dots only. Between 5 and 15 characters.', 
        email: 'Enter a valid email.', 
        password: 'A-Z, a-z, 0-9. Between 5 and 15 characters', 
        confirm: 'Passwords does not match.',
        image: 'Image URL error' 
    });

    // HANDLERS
    const signupHandler = () => dispatch(getSignup({ ...signupData }));
    const changeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setSignupData({ ...signupData, [key]: value });
        setSignupErrors(signupValidation({ ...signupData, [key]: value }));    
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(signupErrors).length) signupHandler();
        else dispatch(setPopup({
            title: 'Error',
            message: 'All fields are required',
            type: 'alert'
        }));
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
                
                <input
                    name="confirm"
                    type="password"
                    onChange={ changeHandler }
                    placeholder="Confirm password" 
                />
            <button onClick={ backHandler }>Back</button>
            <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;