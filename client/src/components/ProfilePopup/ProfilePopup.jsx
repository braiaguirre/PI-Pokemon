// STYLES
import styles from './ProfilePopup.module.css';

// DEPENDENCIES
import { useSelector } from 'react-redux';

const ProfilePopup = () => {

    // STATES
    const { userPicture } = useSelector(state => state.config);
    
    return (
        <div className={ styles.container }>
            <h1>hola</h1>
            asdasd
        </div>
    );
}

export default ProfilePopup;