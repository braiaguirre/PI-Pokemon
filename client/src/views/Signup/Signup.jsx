// STYLES
import styles from './Signup.module.css';

// DEPENDENCIES
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { getSignup, getImage, clearImage, setAlert } from '../../redux/actions/actions';

// UTILS
import signupValidation from '../../utils/signupValidation';
import random from '../../utils/random';
import pokeball from '../../assets/pokeball.png';

const Signup = () => {
    document.title = 'PokeHenry > Signup';
    
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // STATES
    const image = useSelector(state => state.image);
    const [signupData, setSignupData] = useState({
        username: '', 
        email: '', 
        password: '', 
        confirm: '',
    });
    const [signupErrors, setSignupErrors] = useState({
        username: 'A-Z, a-z, 0-9 and dots only. Between 5 and 15 characters.', 
        email: 'Enter a valid email.', 
        password: 'A-Z, a-z, 0-9. Between 5 and 15 characters', 
        confirm: 'Passwords does not match.',
    });

    // HANDLERS
    const signupHandler = () => {
        dispatch(getSignup({ ...signupData, image: image }, [() => navigate('/')]));
    }
    const changeHandler = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        validationHandler(key, value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (Object.keys(signupErrors).length) dispatch(setAlert({
            title: 'Error',
            message: 'All fields are required',
            type: 'ALERT'
        }));
        else if (!image) dispatch(setAlert({
            title: 'Error',
            message: 'Select a profile image',
            type: 'ALERT'
        }))
        else signupHandler();
    }
    const backHandler = (e) => {
        e.preventDefault();
        navigate('/');
    }
    const getImageHandler = (e) => {
        e.preventDefault();
        dispatch(getImage(random()));
        validationHandler('image', image);
    }
    const validationHandler = (key, value) => {
        setSignupData({ ...signupData, [key]: value });
        setSignupErrors(signupValidation({ ...signupData, [key]: value }));   
    }

    useEffect(() => {
        return () => dispatch(clearImage());
    }, [])

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
                <button onClick={ getImageHandler }>Get random image</button>
                <img
                    src={ image ? image : pokeball }
                    alt="Profile image"
                />
            
                <button>Sign Up</button>
                <button onClick={ backHandler }>Back</button>
            </form>
        </div>
    );
}

export default Signup;