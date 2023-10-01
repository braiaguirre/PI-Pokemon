// STYLES
import styles from './Pokedex.module.css';

// DEPENDENCIES
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import Cards from '../../components/Cards/Cards';

// ACTIONS
import { getPokedex, clearPokedex } from '../../redux/actions/actions';

const Pokedex = () => {
    document.title = 'PokeHenry > Pokedex';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const pokemons = useSelector(state => state.pokedex);
    const { page } = useSelector(state => state.config);

    // LOAD DATA
    useEffect(() => {
        dispatch(getPokedex(page));
        return () => clearPokedex();
    }, []);

    return (
        <div className={ styles.container }>
            <Cards pokemons={ pokemons } />
        </div>
    );
}

export default Pokedex;