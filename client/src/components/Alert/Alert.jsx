// STYLES
import styles from './Alert.module.css';

// DEPENDENCIES
import { useDispatch } from 'react-redux';

// ACTIONS
import { clearAlert } from '../../redux/actions/actions';

const Alert = ({title, message, type}) => {

    // HOOKS
    const dispatch = useDispatch();

    // HANDLERS
    const acceptHandler = () => dispatch(clearAlert());
    
    return (
        <div className={ styles.container }>
            <h2>{ title }</h2>
            <p>{ message }</p>
            { type === 'accept' &&
                <button onClick={ acceptHandler }>Accept</button>
            }
            { type === 'yesNo' &&
                <>
                    <button>Yes</button>
                    <button>No</button>
                </>
            }
        </div>
    );
}

export default Alert;