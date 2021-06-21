import { POKEMON_CREATE, GET_POKEMONS, POKEMON_FILTER, POKEMON_CLEAR, POKEMON_SORT } from './Actions.js';

const initialState = {
    createPokemon: false,
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
        default: return state;
    }
}

export default reducer;