// STYLES
import styles from './Error404.module.css';

const Error404 = () => {
    document.title = 'PokeHenry > Not found';
    
    return (
        <div className={ styles.container }>
            <h2>Nothing over here...</h2>
        </div>
    );
}

export default Error404;