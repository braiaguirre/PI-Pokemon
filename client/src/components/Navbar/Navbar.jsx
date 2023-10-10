// STYLES
import styles from './Navbar.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// ACTIONS
import { getLogout, setPopup } from '../../redux/actions/actions';

const Navbar = () => {
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // STATES
    const userPicture = useSelector(state => state.config.userPicture);
    const username = useSelector(state => state.config.username);

    // HANDLERS
    const homeHandler = () => navigate(`/`);
    const pokedexHandler = () => navigate(`/pokedex`);
    const createhandler = () => dispatch(setPopup({ type: 'CREATE_POKEMON' }))
    const logoutHandler = () => {
        dispatch(getLogout());
    }
    const profileHandler = () => {
        dispatch(setPopup({ type: 'PROFILE'}));
    }

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
                <div className={ styles.profile }>
                        <h3>{ username }</h3>
                        <img src={ userPicture } onClick={ profileHandler } />
                    </div>
            </div>
        </div>
    );
}

export default Navbar;