// STYLES
import styles from './GetPokemons.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import MiniCards from '../MiniCard/MiniCard';
import MiniCard from '../MiniCard/MiniCard';

// ACTIONS
import { getPokemonById, savePokemons, clearPopup, setAlert } from '../../redux/actions/actions';

// UTILS
import random from '../../utils/random';
import pokeball from '../../assets/pokeball.png';

const GetPokemons = () => {
    document.title = 'PokeHenry';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const userId = useSelector(state => state.userId);
    const pokemonsTemp = useSelector(state => state.pokemonsTemp);

    // HANDLERS
    const getPokemonsHandler = () => {
        if (pokemonsTemp.length < 8) dispatch(getPokemonById(random()));
        else dispatch(setAlert({
            title: 'Hey!',
            message: 'Already got your Pokemons',
            type: 'ALERT'
        }));
    }
    const savePokemonsHandler = () => {
        dispatch(savePokemons(pokemonsTemp, userId));
        dispatch(clearPopup());
    }

    return (
        <>
            <div className={ styles.container }>
                <h2>Let's get your initial Pokemons!</h2>
                <p>These will be your eight starting Pokemons.</p>
                { pokemonsTemp.length < 8 ? 
                    <button onClick={ getPokemonsHandler }>Get random Pokemon</button> 
                :
                    <button onClick={ savePokemonsHandler }>Save</button>
                }
                <div className={ styles.cardsContainer }>
                    <img src={ pokemonsTemp[0] ? pokemonsTemp[0].image : pokeball} />
                    <img src={ pokemonsTemp[1] ? pokemonsTemp[1].image : pokeball} />
                    <img src={ pokemonsTemp[2] ? pokemonsTemp[2].image : pokeball} />
                    <img src={ pokemonsTemp[3] ? pokemonsTemp[3].image : pokeball} />
                    <img src={ pokemonsTemp[4] ? pokemonsTemp[4].image : pokeball} />
                    <img src={ pokemonsTemp[5] ? pokemonsTemp[5].image : pokeball} />
                    <img src={ pokemonsTemp[6] ? pokemonsTemp[6].image : pokeball} />
                    <img src={ pokemonsTemp[7] ? pokemonsTemp[7].image : pokeball} />
                </div>
            </div>
        </>
    );
}

export default GetPokemons;