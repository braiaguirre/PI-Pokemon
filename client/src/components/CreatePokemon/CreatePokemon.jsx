// STYLES
import styles from './CreatePokemon.module.css';
import loader from '../../utils/loader.module.css'

// DEPENDENCIES
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { createPokemon, setAlert, clearPopup, getImage, clearImage } from '../../redux/actions/actions';

// UTILS
import random from '../../utils/random';
import pokeball from '../../assets/pokeball.png';
import titleCase from '../../utils/titleCase';
import createValidation from '../../utils/createValidation';

const CreatePokemon = () => {
    document.title = 'PokeHenry > Create';
    
    // HOOKS
    const dispatch = useDispatch();

    // STATES
    const pokedex = useSelector(state => state.pokedex);
    const userId = useSelector(state => state.userId);
    const abilities = useSelector(state => state.pokemonAbilities);
    const types = useSelector(state => state.pokemonTypes);
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
        type1: '',
        type2: '',
        ability1: '',
        ability2: ''
    });
    const [errors, setErrors] = useState({
        name: true,
        xp: true,
        hp: true,
        attack: true,
        spAttack: true,
        defense: true,
        spDefense: true,
        speed: true,
        height: true,
        weight: true,
        type1: true,
        type2: true,
        ability1: true,
        ability2: true
    });

    // HANDLERS
    const imageHandler = (e) => {
        e.preventDefault();
        dispatch(getImage(random()));
    }
    const closeHandler = (e) => {
        e.preventDefault();
        dispatch(clearImage());
        dispatch(clearPopup());
    }
    const changeHandler = (e) => {
        setPokemon({ ...pokemon, [e.target.name]: e.target.value });
        setErrors(createValidation({ ...pokemon, [e.target.name]: e.target.value }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        for (let error in errors) {
            if (image === '' || error === true) {
                dispatch(setAlert({
                    title: 'Hey!',
                    message: 'All fields are required',
                    type: 'ALERT'
                }));
                return;
            }
        }
        dispatch(createPokemon({
            ...pokemon, 
            abilities: pokemon.ability2 ? [pokemon.ability1, pokemon.ability2] : [pokemon.ability1],
            types: pokemon.type2 ? [pokemon.type1, pokemon.type2] : [pokemon.type1],
            image: image,
            id: pokedex.length + 1,
        },
            userId
        ));
        dispatch(clearImage());
        dispatch(clearPopup());
    }

    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.title }>
                    <h2>Create custom Pokemon</h2>
                    <h4>Fill de info</h4>
                </div>
                <form onSubmit={ submitHandler }>
                    <div className={ styles.form }>
                        <div className={ styles.col }>
                            <div className={ styles.row }>
                                <input name="name" onChange={ changeHandler } placeholder="Name" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.name ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="xp" onChange={ changeHandler } placeholder="XP" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.xp ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="hp" onChange={ changeHandler } placeholder="HP" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.hp ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="attack" onChange={ changeHandler } placeholder="Attack" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.attack ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="spAttack" onChange={ changeHandler } placeholder="Special Attack" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.spAttack ? 'close' : 'done'}</span>
                            </div>
                        </div>
                        <div className={ styles.col }>
                            <div className={ styles.row }>
                                <input name="defense" onChange={ changeHandler } placeholder="Defense" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.defense ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="spDefense" onChange={ changeHandler } placeholder="Special Defense" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.spDefense ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="speed" onChange={ changeHandler } placeholder="Speed" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.speed ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="height" onChange={ changeHandler } placeholder="Height" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.height ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <input name="weight" onChange={ changeHandler } placeholder="Weight" /> 
                                <span className="material-symbols-outlined" width="20px">{errors.weight ? 'close' : 'done'}</span>
                            </div>
                        </div>
                        <div className={ styles.col }>
                            <div className={ styles.row }>
                                <select name="type1" onChange={changeHandler}>1
                                    <option name="">Type 1</option>
                                    { types.map(type => <option name={ type.name } key={ type.id }>{ titleCase(type.name) }</option>) }
                                </select>
                                <span className="material-symbols-outlined" width="20px">{errors.type1 ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <select name="type2" onChange={changeHandler}>
                                    <option name="">Type 2</option>
                                    { types.map(type => <option name={ type.name } key={ type.id }>{ titleCase(type.name) }</option>) }
                                </select>
                                <span className="material-symbols-outlined" width="20px">{errors.type2 ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <select name="ability1" onChange={ changeHandler }>
                                    <option name="">Ability 1</option>
                                    { abilities.map(ability => <option name={ ability.name } key={ ability.id }>{ titleCase(ability.name)}</option>) }
                                </select>
                                <span className="material-symbols-outlined" width="20px">{errors.ability1 ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <select name="ability2" onChange={changeHandler}>
                                    <option name="">Ability 2</option>
                                    { abilities.map(ability => <option name={ ability.name } key={ ability.id }>{ titleCase(ability.name) }</option>) }
                                </select>
                                <span className="material-symbols-outlined" width="20px">{errors.ability2 ? 'close' : 'done'}</span>
                            </div>
                            <div className={ styles.row }>
                                <button className={ styles.imageBtn } onClick={ imageHandler }>Get image</button>
                                <span className="material-symbols-outlined" width="20px">{!image ? 'close' : 'done'}</span>
                            </div>
                        </div>
                        <div className={ styles.col }>
                            <div className= { styles.imageContainer }>
                                { image ? <img src={ image } /> : <div className={ loader.loader }></div> }
                            </div>
                        </div>
                    </div>
                    <div className={ styles.buttons }>
                        <button onClick={ closeHandler }>Close</button>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePokemon;