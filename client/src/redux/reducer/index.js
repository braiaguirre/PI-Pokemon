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

const initialState = {
    pokemonsTemp: [],
    pokeball: [],
    pokeballFiltered: [],
    pokedex: [],
    pokedexPage: [],
    pokemonDetail: {},
    pokemonTypes: [],
    pokemonAbilities: [],
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
        level: 0,
        username: '',
        userPicture: '',
        pokeballFilters: {
            order: 'id',
            direction: 'ASC',
            type: '',
            origin: ''
        },
        pokedexFilters: {
            order: 'id',
            direction: 'ASC',
            type: '',
            origin: ''
        },
    }
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_POKEMON: 
            return !state.pokemonsTemp.length
            ? { ...state, pokemonsTemp: [payload] }
            : { ...state, pokemonsTemp: [ ...state.pokemonsTemp, payload] }

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemonDetail: payload
            }

        case CREATE_POKEMON:
            return {
                ...state,
                pokeball: [ ...state.pokeball, payload ],
                pokeballFiltered: [ ...state.pokeballFiltered, payload ],
                pokedex: [ ...state.pokedex, payload ]
            }

        case DELETE_POKEMON:
            return {
                ...state,
                pokeball: [ ...payload.pokeball ],
                pokeballFiltered: [ ...payload.pokeball ],
                pokedex: [ ...payload.pokedex ]
            }

        case SAVE_POKEBALL:
            return {
                ...state,
                pokeball: payload,
                pokeballFiltered: payload,
            }
        
        case GET_POKEDEX:
            return {
                ...state,
                pokedex: payload.pokedex,
                config: { ...state.config, loading: payload.loading}
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
            
        case GET_POKEMON_ABILITIES:
            return {
                ...state,
                pokemonAbilities: [ ...payload ]
            }
        
        case CLEAR_POKEMON_ABILITIES:
            return {
                ...state,
                pokemonAbilities: []
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

        case SET_POKEBALL_FILTERS:
            return {
                ...state,
                config: { 
                    ...state.config,
                    pokeballFilters: payload
                }
            }

        case SET_POKEDEX_FILTERS:
            return {
                ...state,
                config: { 
                    ...state.config,
                    pokedexFilters: payload
                }
            }

        case CLEAR_FILTERS:
            return {
                ...state,
                config: { ...state.config, pokedexFilters: payload, pokeballFilters: payload }
            }

        case GET_LOGIN:
            return {
                ...state,
                userId: payload.userId,
                access: payload.access,
                pokeball: payload.pokeball,
                pokeballFiltered: payload.pokeballFiltered,
                config: { 
                    ...state.config, 
                    level: payload.level, 
                    username: payload.username,
                    userPicture: payload.userPicture 
                }
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