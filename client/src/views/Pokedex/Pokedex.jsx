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
    const pokedexFilters = useSelector(state => state.config.pokedexFilters)
    const { page } = useSelector(state => state.config);

    // UTILS
    const maxPage = Math.ceil(pokedex.length / 10);

    // HANDLERS
    const pageHandler = (page) => dispatch(getPokedexPage(page, pokedexFilters));

    // LOAD DATA
    useEffect(() => {
        dispatch(getPokedexPage(1, pokedexFilters));
        return () => clearPokedexPage();
    }, [pokedex])

    return (
        <div className={ styles.container }>
            <Filters filters={ pokedexFilters } />
            <Cards pokemons={ pokedexPage } />
            <div className={ styles.navigation }>
                <button className={ page === 1 ? styles.active : '' } onClick={ page === 1 ? () => {}  : () => pageHandler(1) }>First</button>
                <button className={ page === 1 ? styles.active : '' } onClick={ page === 1 ? () => {}  : () => pageHandler(page - 1) }>Prev</button>
                
                <button className={ styles.active }>{ page }</button>

                <button className={ page === maxPage ? styles.active : '' } onClick={ page === maxPage ? () => {}  : () => pageHandler(page + 1) }>Next</button>
                <button className={ page === maxPage ? styles.active : '' } onClick={ page === maxPage ? () => {} : () => pageHandler(maxPage) }>Last</button>
            </div>
        </div>
    );
}

export default Pokedex;