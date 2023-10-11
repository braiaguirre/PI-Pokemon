import {
    GET_LOGIN,
    GET_LOGOUT,
    SET_POPUP,
    SET_ALERT,
    CLEAR_POPUP,
    CLEAR_ALERT,
    GET_IMAGE,
    CLEAR_IMAGE,
    GET_POKEMON,
    GET_POKEMON_BY_NAME,
    DELETE_POKEMON,
    CREATE_POKEMON,
    SAVE_POKEBALL,
    GET_POKEDEX,
    GET_POKEDEX_PAGE,
    CLEAR_POKEDEX_PAGE,
    GET_POKEMON_DETAIL,
    CLEAR_POKEMON_DETAIL,
    GET_POKEMON_TYPES,
    CLEAR_POKEMON_TYPES,
    GET_POKEMON_ABILITIES,
    CLEAR_POKEMON_ABILITIES,
    FILTER_POKEMONS,
    FILTER_POKEDEX,
    SET_POKEBALL_FILTERS,
    SET_POKEDEX_FILTERS,
    CLEAR_FILTERS
} from '../actions/actions-types';
import axios from 'axios';

const URL = 'http://localhost:3001';

export const getPokemonById = (id) => {
    const endpoint = `${ URL }/pokemons/${ id }`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEMON,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const getPokemonByName = (name) => {
    const endpoint = `${ URL }/pokemons/name?name=${ name }`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const createPokemon = (pokemon, userId) => {
    const endpoint = `${ URL }/pokemons/custom/`;

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, { pokemon, userId });
            return dispatch({
                type: CREATE_POKEMON,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const deletePokemon = (id, userId) => {
    const endpoint = `${ URL }/pokemons/custom/delete`;

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, { id, userId });
            return dispatch({
                type: DELETE_POKEMON,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const getPokedex = () => {
    const endpoint = `${ URL }/pokemons`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEDEX,
                payload: data
            })
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const getPokedexPage = (page, filters) => {
    const endpoint = `${ URL }/pokedex/`;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, { page, filters });
            return dispatch({
                type: GET_POKEDEX_PAGE,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const clearPokedexPage = () => {
    return ({
        type: CLEAR_POKEDEX_PAGE,
        payload: {
            pokedexPage: []
        }
    });
}

export const getLogin = ({ userOrEmail, password }) => {
    const endpoint = `${ URL }/users/login/?userOrEmail=${ userOrEmail }&password=${ password }`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_LOGIN,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const getLogout = (id) => {      // TODO: IMPLEMENT REMEMBER ME OPTION
    const endpoint = `${ URL }/users/logout`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_LOGOUT,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const getSignup = (signupData, callback) => {
    const endpoint = `${ URL }/users/signup/`;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, signupData);
            return dispatch({
                type: SET_ALERT,
                payload: {
                    ...data,
                    callback: callback
                }
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const setAlert = ({ title, message, type, callback = null }) => {
    return {
        type: SET_ALERT,
        payload: {
            title: title,
            message: message,
            type: type,
            callback: callback
        }
    };
};

export const clearAlert = () => {
    return {
        type: CLEAR_ALERT,
        payload: {
            title: '',
            message: '',
            type: '',
            callback: null
        }
    };
};

export const setPopup = ({ type }) => {
    return {
        type: SET_POPUP,
        payload: {
            type: type
        }
    };
};

export const clearPopup = () => {
    return {
        type: CLEAR_POPUP,
        payload: {
            type: ''
        }
    };
};

export const getImage = (id) => {
    const endpoint = `${ URL }/pokemons/image/${ id }`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_IMAGE,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const clearImage = () => {
    return {
        type: CLEAR_IMAGE,
        payload: ''
    };
};

export const savePokemons = (pokemons, userId) => {
    const endpoint = `${ URL }/pokemons/`;
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, { pokemons, userId });
            return dispatch({
                type: SAVE_POKEBALL,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const getPokemonDetail = (id) => {
    const endpoint = `${ URL }/pokemons/${ id }`;
    
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEMON_DETAIL,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const clearPokemonDetail = () => {
    return ({
        type: CLEAR_POKEMON_DETAIL
    });
};

export const getPokemonTypes = () => {
    const endpoint = `${ URL }/types/`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEMON_TYPES,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const clearPokemonTypes = () => {
    return ({
        type: CLEAR_POKEMON_TYPES,
    });
};

export const getPokemonAbilities = () => {
    const endpoint = `${ URL }/abilities/`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEMON_ABILITIES,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const clearPokemonAbilities = () => {
    return ({
        type: CLEAR_POKEMON_ABILITIES,
    });
};

export const filterPokemons = (filtersData) => {
    const { order, direction, type, userId } = filtersData;
    const endpoint = `${ URL }/filters/pokemons/?userId=${ userId }&order=${ order }&direction=${ direction }&type=${ type }`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: FILTER_POKEMONS,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const filterPokedex = (filtersData) => {
    const { order, direction, type } = filtersData;
    const endpoint = `${ URL }/filters/pokedex/?order=${ order }&direction=${ direction }&type=${ type }`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: FILTER_POKEDEX,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data
            });
        };
    };
};

export const setPokeballFilters = (filters) => {
    return {
        type: SET_POKEBALL_FILTERS,
        payload: {
            ...filters
        }
    };   
}

export const setPokedexFilters = (filters) => {
    return {
        type: SET_POKEDEX_FILTERS,
        payload: {
            ...filters
        }
    };   
}

export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS,
        payload: {
            order: 'id',
            direction: 'ASC',
            type: ''
        }
    };   
}