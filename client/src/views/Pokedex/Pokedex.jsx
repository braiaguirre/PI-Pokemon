// STYLES
import styles from './Pokedex.module.css';

// DEPENDENCIES
import { useEffect, useState } from 'react';
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

    // HANDLERS
    const loadHandler = () => dispatch(getPokedex(page + 1));

    return (
        <div className={ styles.container }>
            <Cards pokemons={ pokemons } />
            <button onClick={ loadHandler }>Load more!</button>
        </div>
    );
}

export default Pokedex;