import { POKEMON_CREATE } from './Actions.js';

const initialState = {
    createPokemon: false,
    allPokemons: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case POKEMON_CREATE: return {
            ...state,
            createPokemon: action.payload
        }
        default: return state;
    }
}

export default reducer;