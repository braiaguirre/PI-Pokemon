// STYLES
import styles from './Navbar.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// ACTIONS
import { getLogout, setPopup } from '../../redux/actions/actions';

// ICONS
import pokeball from '../../assets/navbar_pokeball.png';
import pokedex from '../../assets/navbar_pokedex.png';
import account from '../../assets/navbar_account.png';

const Navbar = () => {
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // STATES
    const popup = useSelector(state => state.popup);
    const userPicture = useSelector(state => state.config.userPicture);
    const username = useSelector(state => state.config.username);

    // HANDLERS
    const homeHandler = () => navigate(`/`);
    const pokedexHandler = () => navigate(`/pokedex`);
    const profileHandler = () => dispatch(setPopup({ type: 'PROFILE'}));

    return (
        <div className={ styles.container }>
            <ul>
                <li onClick={ homeHandler } className={ pathname === '/' ? `${ styles.active }` : '' } name="">
                    <img src={ pokeball } />
                    Pokeball
                </li>
                <li onClick={ pokedexHandler } className={ pathname === '/pokedex' ? `${ styles.active }` : '' } name="pokedex">
                    <img src={ pokedex } />
                    Open Pokedex
                </li>
                <li onClick={ profileHandler } className={ popup.type === 'PROFILE' ? `${ styles.active }` : '' }>
                    <img src={ account } />
                    Account
                </li>
            </ul>
        </div>
    );
}

export default Navbar;