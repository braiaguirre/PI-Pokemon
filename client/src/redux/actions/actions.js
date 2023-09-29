import {
    GET_LOGIN,
    GET_LOGOUT,
    GET_SIGNUP,
    
    SET_POPUP,
    SET_ORDER,
    SET_FILTER,
    CLEAR_POPUP,
    CLEAR_ORDER,
    CLEAR_FILTER,
    
    GET_TYPES,
    GET_IMAGE,
    GET_POKEMON,
    DELETE_POKEMON,
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
                type: SET_POPUP,
                payload: err.response.data
            })
        }
    }
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
                type: SET_POPUP,
                payload: err.response.data
            })
        }
    }
}

export const getSignup = (signupData) => {
    const endpoint = `${ URL }/users/signup/`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint, signupData);
            return dispatch({
                type: SET_POPUP,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_POPUP,
                payload: err.response.data.error
            })
        }
    }
}

export const setPopup = ({ title, message, type, callback = {} }) => {
    return {
        type: SET_POPUP,
        payload: {
            title: title,
            message: message,
            type: type,
            callback: callback
        }
    };
}

export const clearPopup = () => {
    return {
        type: CLEAR_POPUP,
        payload: {
            title: '',
            message: '',
            type: '',
            callback: {}
        }
    };
}