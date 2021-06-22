import { POKEMON_CREATE,
         GET_POKEMONS,
         POKEMON_FILTER,
         POKEMON_CLEAR,
         POKEMON_SORT,
         POKEMON_DETAIL,
         POKEMON_DATA_DETAIL,
         POKEMON_DATA_CLEAR,
         POKEMON_SEARCH } from './Actions.js';

const initialState = {
    createPokemon: false,
    detail: false,
    detailPokemon: {},
    allPokemons: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMONS: return {
            ...state,
            allPokemons: action.payload
        }
        case POKEMON_CREATE: return {
            ...state,
            createPokemon: action.payload
        }
        case POKEMON_FILTER: return {
            ...state,
            allPokemons: action.payload
        }
        case POKEMON_CLEAR: return {
            ...state,
            allPokemons: []
        }
        case POKEMON_SORT: return {
            ...state,
            allPokemons: action.payload
        }
        case POKEMON_DETAIL: return {
            ...state,
            detail: action.payload
        }
        case POKEMON_DATA_CLEAR: return {
            ...state,
            detailPokemon: action.payload
        }
        case POKEMON_DATA_DETAIL: return {
            ...state,
            detailPokemon: action.payload
        }
        case POKEMON_SEARCH: return {
            ...state,            
            allPokemons: action.payload
        }
        default: return state;
    }
}

export default reducer;