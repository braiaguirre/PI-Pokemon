// STYLES
import styles from './Navbar.module.css';

// COMPONENTS
import NavbarProfile from '../NavbarProfile/NavbarProfile';
import NavbarSearch from '../NavbarSearch/NavbarSearch';

const Navbar = () => {
    
    return (
        <div className={ styles.container }>
            <ul>
                <li>Home</li>
                <li>Pokedex</li>
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}

export default Navbar;