// STYLES
import styles from './Navbar.module.css';

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