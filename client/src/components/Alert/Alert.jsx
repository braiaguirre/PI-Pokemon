// STYLES
import styles from './Alert.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { clearAlert } from '../../redux/actions/actions';

const Alert = () => {
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const { title, message, callback } = useSelector(state => state.alert);
    // HANDLERS
    const acceptHandler = () => {
        if (callback) callback.forEach(callback => dispatch(callback));
        dispatch(clearAlert());
    }
    
    return (
        <div className={ styles.container }>
            <h2>{ title }</h2>
            <p>{ message }</p>
            <button onClick={ acceptHandler }>Accept</button>
        </div>
    );
}

export default Alert;