import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_CREATE = "POKEMON_CREATE";
export const POKEMON_FILTER = "POKEMON_FILTER";
export const POKEMON_CLEAR  = "POKEMON_CLEAR";

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

export function filterPokemons(all, or, cr, arrayNames){  
    
    var filterPokemons;

    return function(dispatch){
        return axios.get("http://localhost:3001/pokemons")
        .then(response => {
            if(or.checked){
                filterPokemons = response.data.filter( (pokemon, index) => index < 40);                
            } else if (cr.checked){
                filterPokemons = response.data.filter( (pokemon, index) => index > 39);
                if (filterPokemons.length === 0) filterPokemons = ['Vacio'];
            } else if (all.checked || !all.checked){
                filterPokemons = response.data;
            }
                    
            var arreglo = [];
            
            if(arrayNames.length > 0) {
                for(var tipo in arrayNames){
                    for(var key in filterPokemons){
                        if( (filterPokemons[key].types.includes(arrayNames[tipo])) ) {
                            let buscar = arreglo.find( (e) => filterPokemons[key].name === e.name); 
                        
                            if(buscar === undefined) arreglo.push(filterPokemons[key]);
                        }    
                    }
                }
            }
            console.log('1', arreglo);
            console.log('2', filterPokemons)
// -------------------------
            dispatch({ type: POKEMON_FILTER, payload: arreglo.length > 0 ? arreglo:filterPokemons});
        })
        .catch(error => console.error('No se pudieron filtrar los pokemons'))
    }        
}

export function clearPokemons(){
    return { type: POKEMON_CLEAR, payload: []}
}
