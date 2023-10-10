// STYLES
import styles from './GetPokemons.module.css';
import loader from '../../utils/loader.module.css'

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
import titleCase from '../../utils/titleCase';

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
            message: 'Already got your Pokémons',
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
                <h2>Let's get your initial Pokémons!</h2>
                <h4>These will be your eight starting Pokémons. Once you level up, you can get more.</h4>
                <div className={ styles.cardsContainer }>
                    <div className={ styles.col }>
                        { pokemonsTemp[0] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[0].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[0].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 1</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[1] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[1].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[1].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 2</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[2] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[2].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[2].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 3</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[3] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[3].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[3].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 4</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[4] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[4].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[4].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 5</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[5] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[5].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[5].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 6</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[6] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[6].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[6].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 7</h4>
                            </>
                        }
                    </div>

                    <div className={ styles.col }>
                        { pokemonsTemp[7] ?
                            <>
                                <div className= { styles.imageContainer }><img src={ pokemonsTemp[7].image} /></div>
                                <h4>{ titleCase(pokemonsTemp[7].name) }</h4>
                            </>
                        :
                            <>
                                <div className= { styles.imageContainer }><div className={ loader.loader }></div></div>
                                <h4>Slot 8</h4>
                            </>
                        }
                    </div>
                </div>
                { pokemonsTemp.length < 8 ? 
                    <button onClick={ getPokemonsHandler }>Get Random</button> 
                :
                    <button onClick={ savePokemonsHandler }>Save</button>
                }
            </div>
        </>
    );
}

export default GetPokemons;