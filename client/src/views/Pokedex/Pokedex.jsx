// STYLES
import styles from './Pokedex.module.css';

// DEPENDENCIES
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';

// ACTIONS
import { getPokedexPage, clearPokedexPage } from '../../redux/actions/actions';

const Pokedex = () => {
    document.title = 'PokeHenry > Pokedex';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const pokedex = useSelector(state => state.pokedex);
    const pokedexPage = useSelector(state => state.pokedexPage);
    const filters = useSelector(state => state.config.filters)
    const { page } = useSelector(state => state.config);

    // UTILS
    const maxPage = Math.ceil(pokedex.length / 12);

    // HANDLERS
    const firstHandler = () => dispatch(getPokedexPage(1, filters));
    const prevHandler = () => dispatch(getPokedexPage(page - 1, filters));
    const nextHandler = () => dispatch(getPokedexPage(page + 1, filters));
    const lastHandler = () => dispatch(getPokedexPage(maxPage, filters));

    // LOAD DATA
    useEffect(() => {
        dispatch(getPokedexPage(1, filters));
        return () => clearPokedexPage();
    }, [pokedex])

    return (
        <div className={ styles.container }>
            <Filters />
            <Cards pokemons={ pokedexPage } />
            <div className={ styles.navigation }>
                { page > 1 && <button onClick={ firstHandler }>First</button> }
                { page > 1 && <button onClick={ prevHandler }>Previous</button> }
                { page < maxPage && <button onClick={ nextHandler }>Next</button> }
                { page < maxPage && <button onClick={ lastHandler }>Last</button> }
            </div>
        </div>
    );
}

export default Pokedex;