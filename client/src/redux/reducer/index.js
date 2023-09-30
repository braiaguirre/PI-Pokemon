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

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    pokemonsPokedex: [],
    image: '',
    access: false,
    popup: {
        title: '',
        message: '',
        type: '',
        callback: null
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

        case GET_LOGOUT:
            return {
                ...state,
                access: payload
            }

        case GET_SIGNUP:
            return {
                ...state,
                popup: payload
            }

        case SET_POPUP:
            return {
                ...state,
                popup: { ...payload }
            }

        case CLEAR_POPUP:
            return {
                ...state,
                popup: payload
            }

        case GET_IMAGE:
            return {
                ...state,
                image: payload
            }
        
        case CLEAR_IMAGE:
            return {
                ...state,
                image: payload
            }

        default: 
            return {
                ...state
            }
    }
}

export default reducer;