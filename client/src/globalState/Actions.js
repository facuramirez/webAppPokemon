import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_CREATE = "POKEMON_CREATE";
export const POKEMON_FILTER = "POKEMON_FILTER";
export const POKEMON_CLEAR  = "POKEMON_CLEAR";
export const POKEMON_SORT   = "POKEMON_SORT";
export const POKEMON_DETAIL = "POKEMON_DETAIL";
export const POKEMON_DATA_DETAIL = "POKEMON_DATA_DETAIL";
export const POKEMON_DATA_CLEAR = "POKEMON_DATA_CLEAR";
export const POKEMON_SEARCH = "POKEMON_SEARCH";

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

            dispatch({ type: POKEMON_FILTER, payload: arreglo.length > 0 ? arreglo:filterPokemons});
        })
        .catch(error => console.error('No se pudieron filtrar los pokemons'))
    }        
}

export function clearPokemons(){
    return { type: POKEMON_CLEAR, payload: []}
}

export function sortPokemons(allPokemons, radio1, radio2){
    
    if(radio1[0].checked || (!radio1[0].checked && !radio1[1].checked)){ // ASCENDING
        if(radio2[0].checked) { // Alphabetical
            allPokemons.sort(function(a, b) {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                return 0;
            })
        } else if(radio2[1].checked) { // Strength
            allPokemons.sort(function(a, b) {
                if(a.strength > b.strength) return 1
                if(a.strength < b.strength) return -1
                return 0;
            }
        )} else if(radio2[2].checked) { // Weight
            allPokemons.sort(function(a, b) {
                if(a.weight > b.weight) return 1
                if(a.weight < b.weight) return -1
                return 0;
            }
        )} else if(radio2[3].checked) { // Heigtht
            allPokemons.sort(function(a, b) {
                if(a.height > b.height) return 1
                if(a.height < b.height) return -1
                return 0;
            }
        )}
    }

    if(radio1[1].checked){ // DESCENDING
        if(radio2[0].checked) { // Alphabetical
            allPokemons.sort(function(a, b) {
                if(a.name < b.name) return 1
                if(a.name > b.name) return -1
                return 0;
            })
        } else if(radio2[1].checked) { // Strength
            allPokemons.sort(function(a, b) {
                if(a.strength < b.strength) return 1
                if(a.strength > b.strength) return -1
                return 0;
            }
        )} else if(radio2[2].checked) { // Weight
            allPokemons.sort(function(a, b) {
                if(a.weight < b.weight) return 1
                if(a.weight > b.weight) return -1
                return 0;
            }
        )} else if(radio2[3].checked) { // Height
            allPokemons.sort(function(a, b) {
                if(a.height < b.height) return 1
                if(a.height > b.height) return -1
                return 0;
            }
        )}
    }
    console.log(allPokemons);
    // allPokemons = allPokemons.pop();
    // console.log('pop', allPokemons);
    // allPokemons = [allPokemons]
    allPokemons = allPokemons.map( (pokemon) => pokemon);

    return { type: POKEMON_SORT, payload: allPokemons }
}


export function detailPokemon(pokemonName){
    return { type: POKEMON_DETAIL, payload: pokemonName }
}

export function detailData(name){
    window.scrollTo(0, 0);
    return function(dispatch){
        return axios.get(`http://localhost:3001/pokemons/${name}`)
        .then( response => {
            
            dispatch({ type: POKEMON_DATA_DETAIL, payload: response.data })
        })
        .catch(error => console.error('No se pudo obtener el detalle del pokemon'))        

    }
}

export function clearData(){
    return { type: POKEMON_DATA_CLEAR, payload: []}
}


export function searchPokemon(value){
    return function(dispatch){
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then( response => {
            let types = response.data.types.map( (type) => type.type.name);
            
            let pokemon = [{
                image: (response.data.sprites.other.dream_world.front_default === null) ?
                        response.data.sprites.other['official-artwork'].front_default
                        :
                        response.data.sprites.other.dream_world.front_default,
                name: response.data.name,
                types: types,
                id: response.data.id,
                life: response.data.stats[0].base_stat,
                strength: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                speed: response.data.stats[5].base_stat,
                height: response.data.height,
                weight: response.data.weight
            }];
                        
            dispatch({ type: POKEMON_SEARCH, payload: pokemon })
        })
        .catch(error => alert('No se pudo obtener el detalle del pokemon'))
    }
}