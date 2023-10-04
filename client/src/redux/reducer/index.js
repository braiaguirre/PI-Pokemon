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
    GET_POKEDEX,
    GET_POKEDEX_PAGE,
    CLEAR_POKEDEX_PAGE,
    GET_POKEMON_DETAIL,
    CLEAR_POKEMON_DETAIL,
    GET_POKEMON_TYPES,
    CLEAR_POKEMON_TYPES,
    FILTER_POKEMONS,
    FILTER_POKEDEX,
    SET_FILTERS,
    CLEAR_FILTERS
} from '../actions/actions-types';

const initialState = {
    pokeball: [],
    pokeballFiltered: [],
    pokedex: [],
    pokedexPage: [],
    pokemonDetail: {},
    pokemonTypes: [],
    image: '',
    userId: null,
    access: false,
    popup: {
        type: ''
    },
    alert: {
        title: '',
        message: '',
        type: '',
        callback: null
    },
    config: {
        loading: true,
        page: 1,
        filters: {
            order: 'id',
            direction: 'ASC',
            type: '',
        }
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_POKEMON: 
            return !state.pokeball.length
            ? { ...state, pokeball: [payload] }
            : { ...state, pokeball: [ ...state.pokeball, payload] }
        
        case GET_POKEDEX:
            return {
                ...state,
                ...payload
            }

        case GET_POKEDEX_PAGE:
            return {
                ...state,
                pokedexPage: payload.pokedexPage,
                config: { ...state.config, page: payload.page}
            }    
            
        case CLEAR_POKEDEX_PAGE:
            return {
                ...state,
                ...payload
            }

        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: payload
            }
            
        case CLEAR_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }

        case GET_POKEMON_TYPES:
            return {
                ...state,
                pokemonTypes: [ ...payload ]
            }
        
        case CLEAR_POKEMON_TYPES:
            return {
                ...state,
                pokemonTypes: []
            }
            
        case FILTER_POKEMONS:
            return {
                ...state,
                pokeballFiltered: payload,
            }
        case FILTER_POKEDEX:
            return {
                ...state,
                pokedex: payload
            }
        case SET_FILTERS:
            return {
                ...state,
                config: { ...state.config, filters: { ...payload } }
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                config: { ...state.config, filters: { ...payload } }
            }
        case GET_LOGIN:
            return {
                ...state,
                ...payload
            }

        case GET_LOGOUT:
            return {
                ...state,
                ...payload
            }

        case SET_ALERT:
            return {
                ...state,
                alert: payload
            }

        case CLEAR_ALERT:
            return {
                ...state,
                alert: payload
            }

        case SET_POPUP:
            return {
                ...state,
                popup: payload
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