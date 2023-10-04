// STYLES
import styles from './Filters.module.css';

// DEPENDENCIES
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// ACTIONS
import { filterPokemons, filterPokedex } from '../../redux/actions/actions.js';

// UTILS
import titleCase from '../../utils/titleCase';

function Filters() {

    // HOOKS
    const dispatch = useDispatch();
    const location = useLocation();
    const typeRef =  useRef();
    const directionRef = useRef();
    const orderRef = useRef();

    // STATES
    const userId = useSelector(state => state.userId);
    const types = useSelector(state => state.pokemonTypes);
    const [filters, setFilters] = useState({
        order: '',  
        direction: '',
        type: ''
    });

    // HANDLERS
    const changeHandler = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value }); 
        dispatch(filterPokemons({ ...filters, [e.target.name]: e.target.value, userId: userId }));
    }

    const resetHandler = () => {
        setFilters(initialfilters)
        orderRef.current.value = '';
        directionRef.current.value = '';
        typeRef.current.value = '';
    }

    return (
        <>
            <div className={ styles.filters }>
                <h3>Order by:</h3>
                <select name="order" ref={ orderRef } onChange={ changeHandler }>
                    <option value="">No order</option>
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
                    <option value="">No direction</option>
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                </select>
                <h3>Filter by:</h3>
                <select name="type" ref={ typeRef } onChange={ changeHandler }>
                    <option value="">All types</option>
                    {types.map(type => 
                        <option value={ type.name } key={ type.id }>{ titleCase(type.name) }</option>
                    )}
                </select>
                <button onClick={resetHandler}>Reset filters</button>
            </div>
        </>
    )
}

export default Filters;