// STYLES
import styles from './Alert.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// ACTIONS
import { clearAlert } from '../../redux/actions/actions';

const Alert = () => {
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // STATES
    const { title, message, callback } = useSelector(state => state.alert);
    console.log(pathname);
    // HANDLERS
    const closeHandler = () => {
        dispatch(clearAlert());
    }
    const callbackHandler = () => {
        callback.forEach(callback => callback());
        dispatch(clearAlert());
    }
    
    return (
        <div className={ styles.container }>
            <h2>{ title }</h2>
            <h4>{ message }</h4>
            <div className={ styles.buttons }>
                <button onClick={ closeHandler }>Close</button>
                { pathname !== '/signup' && callback && <button onClick={ callbackHandler }>Accept</button> }
            </div>
            </div>
    );
}

export default Alert;