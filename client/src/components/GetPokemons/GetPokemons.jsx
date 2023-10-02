// STYLES
import styles from './GetPokemons.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import MiniCards from '../MiniCard/MiniCard';
import MiniCard from '../MiniCard/MiniCard';

// ACTIONS
import { getPokemonById, savePokemons, clearPopup } from '../../redux/actions/actions';

// UTILS
import random from '../../utils/random';
import pokeball from '../../assets/pokeball.png';

const GetPokemons = () => {
    document.title = 'PokeHenry';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const userId = useSelector(state => state.userId);
    const pokemons = useSelector(state => state.pokemons);

    // HANDLERS
    const getPokemonsHandler = () => dispatch(getPokemonById(random()));
    const savePokemonsHandler = () => {
        dispatch(savePokemons(pokemons, userId));
        dispatch(clearPopup());
    }

    return (
        <>
            <div className={ styles.container }>
                <h2>Let's get your initial Pokemons!</h2>
                <p>These will be your six starting Pokemons.</p>
                <button onClick={ getPokemonsHandler }>Get random Pokemon</button>
                <button onClick={ savePokemonsHandler }>Save</button>
                <div className={ styles.cardsContainer }>
                    <img src={ pokemons[0] ? pokemons[0].image : pokeball} />
                    <img src={ pokemons[1] ? pokemons[1].image : pokeball} />
                    <img src={ pokemons[2] ? pokemons[2].image : pokeball} />
                    <img src={ pokemons[3] ? pokemons[3].image : pokeball} />
                    <img src={ pokemons[4] ? pokemons[4].image : pokeball} />
                    <img src={ pokemons[5] ? pokemons[5].image : pokeball} />
                </div>
            </div>
        </>
    );
}

export default GetPokemons;