import '../css/pokemons.css';
import { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import pokeBola from '../../img/pokebolaBg.png';
import { connect } from 'react-redux';

function Pokemons({allPokemons}) {
    var contador = 0;
      // useEffect( () => {
      //   console.log('INICIO POKEMONS', allPokemons);
      // },[])

    return (
      <div className="containerPokemons">

          {
            (allPokemons.length > 0 && allPokemons[0] !== 'Vacio') && allPokemons.map( (pokemon) => 
            <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} types={pokemon.types} poke={contador++}/> )
          }            
          {
            (allPokemons.length === 0) &&
            (<div id="containerLoading">
                <img id="pokeBolaImg" src= {pokeBola}/>
                <h1 id="loading">Cargando...</h1>
            </div>)
          }
          {
            (allPokemons[0] === 'Vacio') &&
            (
              <div id="containerLoading">
                <h1 className="vacio" id="loading">No hay ningun Pokemon creado</h1>
              </div>
            )
          }
          
                
      </div> 
      );
  }

  
  const mapStateToProps = ({allPokemons}) => ({allPokemons});
  
  export default connect(mapStateToProps)(Pokemons);