import { POKEMON_CREATE, GET_POKEMONS } from './Actions.js';

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
        default: return state;
    }
}

export default reducer;