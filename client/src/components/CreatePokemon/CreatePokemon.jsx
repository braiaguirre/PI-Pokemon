// STYLES
import styles from './CreatePokemon.module.css';

// DEPENDENCIES
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { createPokemon, setAlert, clearPopup, getImage } from '../../redux/actions/actions';

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
            abilities: [pokemon.ability1, pokemon.ability2 ? pokemon.ability2 : null], 
            types: [pokemon.type1, pokemon.type2 ? pokemon.type2 : null], 
            image: image,
            id: pokedex.length + 1,
        },
            userId
        ));
        dispatch(clearPopup());
    }

    return (
        <>
            <div className={ styles.container }>
                <h2>Let's get your initial Pokemons!</h2>
                <p>These will be your six starting Pokemons.</p>
                <form onSubmit={ submitHandler }>
                    <input name="name" onChange={ changeHandler } placeholder="name" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.name ? 'close' : 'done'}</span>
                    <input name="xp" onChange={ changeHandler } placeholder="xp" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.xp ? 'close' : 'done'}</span>
                    <input name="hp" onChange={ changeHandler } placeholder="hp" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.hp ? 'close' : 'done'}</span>
                    <input name="attack" onChange={ changeHandler } placeholder="attack" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.attack ? 'close' : 'done'}</span>
                    <input name="spAttack" onChange={ changeHandler } placeholder="spAttack" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.spAttack ? 'close' : 'done'}</span>
                    <input name="defense" onChange={ changeHandler } placeholder="defense" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.defense ? 'close' : 'done'}</span>
                    <input name="spDefense" onChange={ changeHandler } placeholder="spDefense" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.spDefense ? 'close' : 'done'}</span>
                    <input name="speed" onChange={ changeHandler } placeholder="speed" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.speed ? 'close' : 'done'}</span>
                    <input name="height" onChange={ changeHandler } placeholder="height" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.height ? 'close' : 'done'}</span>
                    <input name="weight" onChange={ changeHandler } placeholder="weight" /> 
                    <span className="material-symbols-outlined" width="20px">{errors.weight ? 'close' : 'done'}</span>
                    <select name="ability1" onChange={ changeHandler }>
                        <option name="">Select ability 1</option>
                        { abilities.map(ability => <option name={ ability.name } key={ ability.id }>{ titleCase(ability.name)}</option>) }
                    </select>
                    <span className="material-symbols-outlined" width="20px">{errors.ability1 ? 'close' : 'done'}</span>
                    <select name="ability2" onChange={changeHandler}>
                        <option name="">Select ability 2</option>
                        { abilities.map(ability => <option name={ ability.name } key={ ability.id }>{ titleCase(ability.name) }</option>) }
                    </select>
                    <span className="material-symbols-outlined" width="20px">{errors.ability2 ? 'close' : 'done'}</span>
                    <select name="type1" onChange={changeHandler}>1
                        <option name="">Select type 1</option>
                        { types.map(type => <option name={ type.name } key={ type.id }>{ titleCase(type.name) }</option>) }
                    </select>
                    <span className="material-symbols-outlined" width="20px">{errors.type1 ? 'close' : 'done'}</span>
                    <select name="type2" onChange={changeHandler}>
                        <option name="">Select type 2</option>
                        { types.map(type => <option name={ type.name } key={ type.id }>{ titleCase(type.name) }</option>) }
                    </select>
                    <span className="material-symbols-outlined" width="20px">{errors.type2 ? 'close' : 'done'}</span>
                    <img src={ image ? image : pokeball } />
                    <span className="material-symbols-outlined" width="20px">{!image ? 'close' : 'done'}</span>
                    <button onClick={ imageHandler }>Get random image</button>
                    <button onClick={ closeHandler }>Close</button>
                    <button>Create</button>
                </form>
            </div>
        </>
    );
}

export default CreatePokemon;