// STYLES
import styles from './Home.module.css';

// DEPENDENCIES
import { useSelector } from 'react-redux';

// COMPONENTS
import Cards from '../../components/Cards/Cards';

const Home = () => {
    document.title = 'PokeHenry';

    // STATES
    const pokemons = useSelector(state => state.pokemons);

    return (
        <>
            { !pokemons.length ? 
                <div>
                    <h2>Let's get your initial Pokemons!</h2>
                </div>
            :
                <div className={ styles.container }>
                    <Cards pokemons={ pokemons } />
                </div>
            }
        </>
    );
}

export default Home;