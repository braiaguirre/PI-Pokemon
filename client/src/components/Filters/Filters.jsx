// STYLES
import styles from './Filters.module.css';

// DEPENDENCIES
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// ACTIONS
import {setFilters, clearFilters, filterPokemons, filterPokedex, setPopup } from '../../redux/actions/actions.js';

// UTILS
import titleCase from '../../utils/titleCase';

function Filters() {

    // HOOKS
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const typeRef =  useRef();
    const directionRef = useRef();
    const orderRef = useRef();

    // STATES
    const userId = useSelector(state => state.userId);
    const types = useSelector(state => state.pokemonTypes);
    const filters = useSelector(state => state.config.filters)

    // HANDLERS
    const createHandler = () => dispatch(setPopup({ type: 'CREATE_POKEMON' }))
    const changeHandler = (e) => {
        dispatch(setFilters({ ...filters, [e.target.name]: e.target.value }));
        dispatcher({ ...filters, [e.target.name]: e.target.value, userId: userId });
    };
    const resetHandler = () => {
        orderRef.current.value = 'id';
        directionRef.current.value = 'ASC';
        typeRef.current.value = '';
        dispatch(setFilters({ order: 'id', direction: 'ASC', type: '', userId: userId }));
        dispatcher({ order: 'id', direction: 'ASC', type: '', userId: userId });
    };
    const nameSearchHandler = () => {
        dispatch(setPopup({ type: 'NAME_SEARCH' }));
    }
    const dispatcher = (data) => {
        if (pathname === '/') dispatch(filterPokemons(data));
        else if (pathname === '/pokedex') dispatch(filterPokedex(data));
    }

    useEffect(() => {
        return () => clearFilters();
    });

    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.col }>
                    { pathname === '/' ? 
                        <h2>My Pokeball</h2>
                    : 
                        <h2>Pokedex</h2> }
                    <div className={ styles.col }>
                        <button onClick={ createHandler }>Create Pokemon</button>
                    </div>
                </div>
                <div className={ styles.col }>
                    <div className={ styles.col }>
                        <h4>Order by:</h4>
                        <select name="order" ref={ orderRef } onChange={ changeHandler }>
                            <option value="id">Id</option>
                            <option value="xp">Xp</option>
                            <option value="hp">Hp</option>
                            <option value="attack">Attack</option>
                            <option value="spAttack">Special Attack</option>
                            <option value="defense">Defense</option>
                            <option value="spDefense">Special Defense</option>
                            <option value="speed">Speed</option>
                            <option value="height">Height</option>
                            <option value="weight">Weight</option>
                        </select>
                        <select name="direction" ref={ directionRef } onChange={ changeHandler }>
                            <option value="ASC">Ascending</option>
                            <option value="DESC">Descending</option>
                        </select>
                    </div>
                    <div className={ styles.col }>
                        <h4>Filter by:</h4>
                        <select name="type" ref={ typeRef } onChange={ changeHandler }>
                            <option value="">All types</option>
                            {types.map(type => 
                                <option value={ type.name } key={ type.id }>{ titleCase(type.name) }</option>
                            )}
                        </select>
                    </div>
                    <div className={ styles.col }>
                        <button onClick={ resetHandler }>Reset filters</button>
                        { pathname === '/pokedex' && <button onClick={ nameSearchHandler }>Name Search</button> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters;