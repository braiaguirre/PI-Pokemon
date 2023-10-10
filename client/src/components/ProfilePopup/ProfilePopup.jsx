// STYLES
import styles from './ProfilePopup.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { getLogout, clearPopup } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const ProfilePopup = () => {

    // HOOKS
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 


    // STATES
    const { username, level } = useSelector(state => state.config);
    
    // HANDLERS
    const closeHandler = () => {
        dispatch(clearPopup());
    }
    const logoutHandler = () => {
        dispatch(getLogout());
        dispatch(clearPopup());
        navigate('/');
    }

    return (
        <div className={ styles.container }>
            <div>
                <h2>Hi, { username }</h2>
            </div>
            <div>
                <h4>Level: { level }</h4>
            </div>
            <div className={ styles.buttons }>
                <button onClick={ closeHandler }>Close</button>
                <button onClick={ logoutHandler }>Logout</button>
            </div>
        </div>
    );
}

export default ProfilePopup;