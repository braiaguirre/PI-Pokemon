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

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    pokemonsPokedex: [],
    image: '',
    access: false,
    alert: {
        title: '',
        message: '',
        type: ''
    },
    popup: {
        popupType: '',
        callback: {}
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKEMON: 
            return {
                ...state,
                pokemons: [payload]
            }

        case GET_LOGIN:
            return {
                ...state,
                access: payload
            }

        case GET_SIGNUP:
            return {
                ...state,
                alert: payload
            }

        case SET_ALERT:
            return {
                ...state,
                alert: payload
            }

        case SET_ALERT:
            return {
                ...state,
                alert: payload
            }

        default: 
            return {
                ...state
            }
    }
}

export default reducer;