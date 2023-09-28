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
                type: SET_ALERT,
                payload: err.response.data.error
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
                type: SET_ALERT,
                payload: err.response.data.error
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
                type: SET_ALERT,
                payload: data
            });
        } catch (err) {
            return dispatch({
                type: SET_ALERT,
                payload: err.response.data.error
            })
        }
    }
}

export const setAlert = (title, message, type) => {
    return dispatch({
        type: SET_ALERT,
        payload: {
            title,
            message,
            type
        }
    });
}

export const clearAlert = () => {
    return dispatch({
        type: CLEAR_ALERT,
        payload: {
            title: '',
            message: '',
            type: ''
        }
    });
}