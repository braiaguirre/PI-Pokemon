// STYLES
import styles from './Navbar.module.css';

// DEPENDENCIES
import { useDispatch } from 'react-redux';

// COMPONENTS
import NavbarProfile from '../NavbarProfile/NavbarProfile';
import NavbarSearch from '../NavbarSearch/NavbarSearch';

// ACTIONS
import { getLogout } from '../../redux/actions/actions';

const Navbar = () => {
    // HOOKS
    const dispatch = useDispatch();

    // HANDLERS
    const logoutHandler = () => dispatch(getLogout());

    return (
        <div className={ styles.container }>
            <ul>
                <li>Home</li>
                <li>Pokedex</li>
                <li>Profile</li>
                <li onClick={ logoutHandler }>Logout</li>
            </ul>
        </div>
    );
}

export default Navbar;