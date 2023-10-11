// STYLES
import styles from './Home.module.css';

// DEPENDENCIES
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';

// ACTIONS
import { filterPokemons, setPopup } from '../../redux/actions/actions';

const Home = () => {
    document.title = 'PokeHenry > Pokeball';

    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // STATES
    const userId = useSelector(state => state.userId);
    const pokeball = useSelector(state => state.pokeball);
    const pokemonsFiltered = useSelector(state => state.pokeballFiltered);
    const pokeballFilters = useSelector(state => state.config.pokeballFilters)

    // HANDLERS
    const getPokemonsHandler = () => dispatch(setPopup({ type: 'GET_POKEMONS' }));

    // LOAD DATA
    useEffect(() => {
        dispatch(filterPokemons({ ...pokeballFilters, userId: userId }));
    }, [pokeball])
    
    return (
        <>
                <div className={ styles.container }>
                { !pokeball.length ? 
                    <div className={ styles.init }>
                        <h2>Let's get your initial Pokémons</h2>
                        <button onClick={ getPokemonsHandler }>Go!</button>
                    </div>
                :
                    <div>
                        <Filters filters={ pokeballFilters } />
                        <Cards pokemons={ pokemonsFiltered } />
                    </div> 
                }
                </div>
        </>
    );
}

export default Home;