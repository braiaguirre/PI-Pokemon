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
    CLEAR_IMAGE,
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
            });
        };
    };
};

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
                type: SET_POPUP,
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
                type: SET_POPUP,
                payload: {
                    ...data,
                    callback: callback
                }
            });
        } catch (err) {
            return dispatch({
                type: SET_POPUP,
                payload: err.response.data
            });
        };
    };
};

export const setPopup = ({ title, message, type, callback = null }) => {
    return {
        type: SET_POPUP,
        payload: {
            title: title,
            message: message,
            type: type,
            callback: callback
        }
    };
};

export const clearPopup = () => {
    return {
        type: CLEAR_POPUP,
        payload: {
            title: '',
            message: '',
            type: '',
            callback: null
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
                type: SET_POPUP,
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