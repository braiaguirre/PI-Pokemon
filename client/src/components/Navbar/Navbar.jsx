// STYLES
import styles from './Navbar.module.css';

// DEPENDENCIES
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// COMPONENTS
import NavbarProfile from '../NavbarProfile/NavbarProfile';
import NavbarSearch from '../NavbarSearch/NavbarSearch';

// ACTIONS
import { getLogout, setPopup } from '../../redux/actions/actions';

const Navbar = () => {
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // HANDLERS
    const homeHandler = () => navigate(`/`);
    const pokedexHandler = () => navigate(`/pokedex`);
    const createhandler = () => dispatch(setPopup({ type: 'CREATE_POKEMON' }))
    const logoutHandler = () => dispatch(getLogout());

    return (
        <div className={ styles.container }>
            <div className={ styles.left }>
                <ul>
                    <li onClick={ homeHandler } className={ pathname === '/' ? `${ styles.active }` : '' } name="">My Pokeball</li>
                    <li onClick={ pokedexHandler} className={ pathname === '/pokedex' ? `${ styles.active }` : '' } name="pokedex">Open Pokedex</li>
                    <li onClick={ createhandler}>Create Pokemon</li>
                </ul>
            </div>
            
            <div className={ styles.right }>
                <ul>
                    <li onClick={ logoutHandler }>Logout</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;