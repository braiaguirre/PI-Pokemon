import {
    GET_LOGIN,
    GET_LOGOUT,
    GET_SIGNUP,
    
    SET_POPUP,
    SET_ALERT,
    SET_ORDER,
    SET_FILTER,
    CLEAR_POPUP,
    CLEAR_ALERT,
    CLEAR_ORDER,
    CLEAR_FILTER,
    
    GET_TYPES,
    GET_IMAGE,
    CLEAR_IMAGE,
    GET_POKEMON,
    GET_POKEMONS,
    CLEAR_POKEDEX_RAW,
    GET_POKEDEX_RAW,

    GET_POKEDEX,
    CLEAR_POKEDEX,

    DELETE_POKEMON,
    SAVE_POKEMONS,
    
    GET_POKEMON_DETAIL,
    CLEAR_POKEMON_DETAIL,

    GET_POKEMON_TYPES,
    CLEAR_POKEMON_TYPES,

    FILTER_POKEMONS,
    FILTER_POKEDEX,

    SET_FILTERS,
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

export const getPokemons = () => {
    const endpoint = `${ URL }/pokemons`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEMONS,
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

export const getPokedexRaw = () => {
    const endpoint = `${ URL }/pokemons/`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_POKEDEX_RAW,
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

export const clearPokedexRaw = () => {
    return ({
        type: CLEAR_POKEDEX_RAW,
        payload: {
            pokedexRaw: []
        }
    });
};

export const getPokedex = (page, filters) => {
    const endpoint = `${ URL }/pokedex/`;
    
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, { page, filters });
            return dispatch({
                type: GET_POKEDEX,
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

export const clearPokedex = () => {
    return ({
        type: CLEAR_POKEDEX,
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
            await axios.post(endpoint, { pokemons, userId });
            return dispatch({});
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

export const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
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