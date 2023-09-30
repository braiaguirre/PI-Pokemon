// STYLES
import styles from './GetPokemons.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import MiniCards from '../MiniCard/MiniCard';
import MiniCard from '../MiniCard/MiniCard';

// ACTIONS
import { getPokemonById, savePokemons } from '../../redux/actions/actions';

// UTILS
import random from '../../utils/random';
import postPokemonController from '../../../../api/src/controllers/pokemonsControllers/postPokemonsController';

const GetPokemons = () => {
    document.title = 'PokeHenry';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const pokemons = useSelector(state => state.pokemons);

    // HANDLERS
    const getPokemonsHandler = () => dispatch(getPokemonById(random()));
    const savePokemonsHandler = () => dispatch(savePokemons(pokemons));

    return (
        <>
            <div className={ styles.container }>
                <h2>Let's get your initial Pokemons!</h2>
                <p>These will be your six starting Pokemons.</p>
                <button onClick={ getPokemonsHandler }>Get random Pokemon</button>
                <button onClick={ savePokemonsHandler }>Save</button>
                <div className={ styles.cardsContainer }>
                </div>
            </div>
        </>
    );
}

export default GetPokemons;