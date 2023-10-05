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
        ability2: '',
    });
    const [errors, setErrors] = useState({
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
        ability2: '',
    });


    // HANDLERS
    const imageHandler = (e) => {
        e.preventDefault();
        dispatch(getImage(random()));
    }
    const createHandler = (e) => {
        e.preventDefault();
        dispatch(createPokemon({ ...pokemon, id: pokedex.length + 1 }, userId));
    }
    const closeHandler = (e) => {
        e.preventDefault();
        dispatch(clearPopup());
    }
    const changeHandler = (e) => {
        setPokemon({ ...pokemon, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // for (let error in errors) {
        //     if (error) dispatch(setAlert({
        //         title: 'Hey!',
        //         message: 'All fields are required',
        //         type: 'ALERT'
        //     }));
        //     return;
        // }
        console.log(pokemon);
        dispatch(createPokemon({
            ...pokemon, 
            abilities: [pokemon.ability1, pokemon.ability2], 
            types: [pokemon.type1, pokemon.type2], 
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
                    <input name="xp" onChange={ changeHandler } placeholder="xp" /> 
                    <input name="hp" onChange={ changeHandler } placeholder="hp" /> 
                    <input name="attack" onChange={ changeHandler } placeholder="attack" /> 
                    <input name="spAttack" onChange={ changeHandler } placeholder="spAttack" /> 
                    <input name="defense" onChange={ changeHandler } placeholder="defense" /> 
                    <input name="spDefense" onChange={ changeHandler } placeholder="spDefense" /> 
                    <input name="speed" onChange={ changeHandler } placeholder="speed" /> 
                    <input name="height" onChange={ changeHandler } placeholder="height" /> 
                    <input name="weight" onChange={ changeHandler } placeholder="weight" /> 
                    <select name="ability1" onChange={ changeHandler }>
                        <option name="">Select ability 1</option>
                        { abilities.map(ability => <option name={ ability.name } key={ ability.id }>{ titleCase(ability.name)}</option>) }
                    </select>
                    <select name="ability2" onChange={changeHandler}>
                        <option name="">Select ability 2</option>
                        { abilities.map(ability => <option name={ ability.name } key={ ability.id }>{ titleCase(ability.name) }</option>) }
                    </select>
                    <select name="type1" onChange={changeHandler}>1
                        <option name="">Select type 1</option>
                        { types.map(type => <option name={ type.name } key={ type.id }>{ titleCase(type.name) }</option>) }
                    </select>
                    <select name="type2" onChange={changeHandler}>
                        <option name="">Select type 2</option>
                        { types.map(type => <option name={ type.name } key={ type.id }>{ titleCase(type.name) }</option>) }
                    </select>
                    <img src={ image ? image : pokeball } />
                    <button onClick={ imageHandler }>Get random image</button>
                    <button onClick={ closeHandler }>Close</button>
                    <button>Create</button>
                </form>
            </div>
        </>
    );
}

export default CreatePokemon;