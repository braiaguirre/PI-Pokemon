// STYLES
import styles from './ProfilePopup.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { getLogout, clearPopup } from '../../redux/actions/actions';

const ProfilePopup = () => {

    // HOOKS
    const dispatch = useDispatch(); 
    
    // STATES
    const { level } = useSelector(state => state.config);
    
    // HANDLERS
    const logoutHandler = () => dispatch(getLogout());
    const closeHandler = () => dispatch(clearPopup());

    return (
        <div className={ styles.container }>
            <div>
                <h4>Level: { level }</h4>
            </div>
            <button onClick={ logoutHandler }>Logout</button>
            <button onClick={ closeHandler }>Close</button>
        </div>
    );
}

export default ProfilePopup;