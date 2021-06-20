import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_CREATE = "POKEMON_CREATE";


export function getPokemons(){
    return function(dispatch){
        return axios.get("http://localhost:3001/pokemons")
        .then(response => {
            dispatch({ type: GET_POKEMONS, payload: response.data});
        })
        .catch(error => console.error('No se pudieron obtener los pokemons'))
    }
}

export function modifyHome(boolean){
    return { type: POKEMON_CREATE, payload: boolean }
}

// export function getMovieDetail(id) {
//     return function(dispatch) {
//         return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
//         .then(response => response.json())
//         .then(json => {
//             dispatch({ type: GET_MOVIES_DETAIL, payload: json });
//         });
//     };
// }