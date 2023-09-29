// STYLES
import styles from './Alert.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { clearPopup } from '../../redux/actions/actions';

const Alert = () => {
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const { title, message, callback } = useSelector(state => state.popup);
    // HANDLERS
    const acceptHandler = () => {
        console.log(callback);
        if (callback) callback.forEach(callback => dispatch(callback));
        dispatch(clearPopup());
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