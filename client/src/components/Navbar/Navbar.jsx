// STYLES
import styles from './Navbar.module.css';

// DEPENDENCIES
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import NavbarProfile from '../NavbarProfile/NavbarProfile';
import NavbarSearch from '../NavbarSearch/NavbarSearch';

// ACTIONS
import { getLogout, setPopup } from '../../redux/actions/actions';

const Navbar = () => {
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // HANDLERS
    const homeHandler = () => navigate(`/`);
    const pokedexHandler = () => navigate(`/pokedex`);
    const createhandler = () => dispatch(setPopup({ type: 'CREATE_CHARACTER' }))
    const logoutHandler = () => dispatch(getLogout());

    return (
        <div className={ styles.container }>
            <ul>
                <li onClick={ homeHandler } name="">Home</li>
                <li onClick={ pokedexHandler} name="pokedex">Pokedex</li>
                <li onClick={ createhandler}>Create</li>
                <li>Profile</li>
                <li onClick={ logoutHandler }>Logout</li>
            </ul>
        </div>
    );
}

export default Navbar;