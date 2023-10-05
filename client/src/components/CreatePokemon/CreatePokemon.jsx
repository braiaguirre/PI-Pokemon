// STYLES
import styles from './GetPokemons.module.css';

// DEPENDENCIES
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { postCustomPokemon, clearPopup } from '../../redux/actions/actions';

// UTILS
import random from '../../utils/random';
import pokeball from '../../assets/pokeball.png';

const CreatePokemon = () => {
    document.title = 'PokeHenry > Create';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const userId = useSelector(state => state.userId);
    const image = useSelector(state => state.image);
    const [pokemon, setPokemon] = useState({
        name: '',
        xp: 0,
        hp: 0,
        attack: 0,
        spAttack: 0,
        defense: 0,
        spDefense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
        abilities: [],
    });

    // HANDLERS
    const imageHandler = () => dispatch(getImage(random()));
    const createHandler = () => dispatch(postCustomPokemon(pokemon, userId));
    const closeHandler = () => dispatch(clearPopup());

    return (
        <>
            <div className={ styles.container }>
                <h2>Let's get your initial Pokemons!</h2>
                <p>These will be your six starting Pokemons.</p>
                <img src={ image ? image : pokeball } />
                <button onClick={ imageHandler }>Get random image</button>
                <button onClick={ createHandler }>Get random Pokemon</button>
                <button onClick={ closeHandler }>Close</button>
            </div>
        </>
    );
}

export default CreatePokemon;