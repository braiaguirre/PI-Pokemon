// STYLES
import styles from './Home.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';

// ACTIONS
import { setPopup } from '../../redux/actions/actions';

const Home = () => {
    document.title = 'PokeHenry';

    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // STATES
    const pokemons = useSelector(state => state.pokemons);

    // HANDLERS
    const getPokemonsHandler = () => dispatch(setPopup({ type: 'GET_POKEMONS' }));

    return (
        <>
            {/* { !pokemons.length ? 
                <div>
                    <h2>Let's get your initial Pokemons!</h2>
                    <button onClick={ getPokemonsHandler }>Go!</button>
                </div>
            : */}
                <div className={ styles.container }>
                    <Filters />
                    <Cards pokemons={ pokemons } />
                </div>
            {/* } */}
        </>
    );
}

export default Home;