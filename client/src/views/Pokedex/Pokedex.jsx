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
    const pokedex = useSelector(state => state.pokedex);
    const pokedexPage = useSelector(state => state.pokedexPage);
    const { page } = useSelector(state => state.config);

    // HANDLERS
    const prevHandler = () => dispatch(getPokedex(page - 1, pokedex));
    const nextHandler = () => dispatch(getPokedex(page + 1, pokedex));

    // LOAD DATA
    useEffect(() => {
        dispatch(getPokedex(1, pokedex));
        return () => clearPokedex();
    }, [])

    return (
        <div className={ styles.container }>
            <Cards pokemons={ pokedexPage } />
            <button onClick={ prevHandler }>Previous!</button>
            <button onClick={ nextHandler }>Next!</button>
        </div>
    );
}

export default Pokedex;