import '../css/pokemons.css';
import PokemonCard from './PokemonCard';
import pokeBola from '../../img/pokebolaBg.png';

function Pokemons({pokemons}) {
    
    return (
      <div className="containerPokemons">
        {/* <PokemonCard name="hola" />
        <PokemonCard name="hola" />
        <PokemonCard name="hola" /> */}
          {
            (pokemons.length > 0) ? pokemons.map( (pokemon) => 
            <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} types={pokemon.types} /> )
            :
            (<div id="containerLoading">
                <img id="pokeBolaImg" src= {pokeBola}/>
                <h1 id="loading">Cargando...</h1>
            </div>)
          }
                
      </div> 
      );
  }

  
  export default Pokemons;