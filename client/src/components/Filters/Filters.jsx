// STYLES
import styles from './Filters.module.css';

// DEPENDENCIES
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// ACTIONS
import { filterPokemons, filterPokedex } from '../../redux/actions/actions.js'; // ! OLD

function Filters() {

    // HOOKS
    const dispatch = useDispatch();
    const location = useLocation();
    const typeRef = orderRef = useRef();

    // STATES
    const types = useSelector(state => state.types);
    const [filters, setFilters] = useState({
        order: 'N', 
        type: 'All'
    });

    // HANDLERS
    const changeHandler = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value }); 
        dispatchFilters();
    }

    const dispatchFilters = () => {
        if (location === '/') dispatch(filterPokemons());
        else dispatch(filterPokedex());
    }

    const resetHandler = () => {
        setFilters(initialfilters)
        orderRef.current.value = 'N';
        typeRef.current.value = 'All';
    }

    return (
        <>
            <div className={styles.filters}>
                <select name="order" ref={orderRef} onChange={ changeHandler }>
                    <option value="N">No order</option>
                    <option value="A">Ascending</option>
                    <option value="D">Descending</option>
                </select>
                <select name="type" ref={typeRef} onChange={ changeHandler }>
                    {types.map(type => 
                        <option value={type.name} key={type.id}>{type.name}</option>
                    )}
                </select>
                <button onClick={resetHandler}>Reset filters</button>
            </div>
        </>
    )
}

export default Filters;