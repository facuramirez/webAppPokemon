import '../css/pokemons.css';
import { useState } from 'react';
import PokemonDetail from './PokemonDetail.js'
import PokemonCard from './PokemonCard';
import pokeBola from '../../img/pokebolaBg.png';
import Pagination from './Pagination.js';
import { connect } from 'react-redux';

function Pokemons({allPokemons, detail}) {
    var contador = 0;
    
    var [currentPage, setCurrentPage] = useState(1);
    var [pokemonsPerPage, setPokemonsPerPage] = useState(12);

    var indexOfLastPost = currentPage * pokemonsPerPage;
    var indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
    var pokemonsPage = [];
    pokemonsPage = allPokemons.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    
    
    return (
      <div className="containerPokemons">
         
          {
            (allPokemons.length > 0 && allPokemons[0] !== 'Vacio' && !detail) && 
            <Pagination 
              pokemonsPerPage={pokemonsPerPage} 
              totalPokemons={allPokemons.length}
              paginate={paginate}  
            />
          }

          <section className="pokemonDetail">
            {
              (detail) && <PokemonDetail nameDet={detail} 
              /> 
            }
          </section>

          <section className="flexPokemons">
          {          
            (allPokemons.length > 0 && allPokemons[0] !== 'Vacio' && !detail) && pokemonsPage.map( (pokemon) => 
            <PokemonCard 
              key={pokemon.name} 
              name={pokemon.name} 
              image={pokemon.image} 
              types={pokemon.types} 
              poke={contador++}/> )
          }
          </section>            
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

  
  const mapStateToProps = ({allPokemons, detail }) => ({allPokemons, detail});
  
  export default connect(mapStateToProps)(Pokemons);