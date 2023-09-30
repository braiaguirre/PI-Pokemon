// STYLES
import styles from './GetPokemons.module.css';

// DEPENDENCIES
import { useSelector } from 'react-redux';

// COMPONENTS

const GetPokemons = () => {
    document.title = 'PokeHenry';

    // STATES
    const pokemons = useSelector(state => state.pokemons);

    return (
        <>
            <div className={ styles.container }>
                <h2>Let's get your initial Pokemons!</h2>
            </div>
        </>
    );
}

export default GetPokemons;