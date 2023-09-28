import {
    LOGIN,
    LOGOUT,
    SIGNUP,
    
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
    access: true,
    alert: {
        title: '',
        message: '',
        alertType: ''
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
        default: 
            return {
                ...state
            }
    }
}

export default reducer;