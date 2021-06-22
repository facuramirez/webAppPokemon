import '../css/pokemons.css';
import '../css/pokemonDetail.css';
import { useEffect } from 'react';
import pokeBola from '../../img/pokebolaBg.png';
import { detailData, clearData } from '../../globalState/Actions.js'
import { connect } from 'react-redux';

function PokemonDetail({ nameDet, detailData, detailPokemon }) {
    
    useEffect( async () => {
        clearData();
        detailData(nameDet);
    }, [])
      
    var { name, image, tipos, id, life, strength, defense, speed, height, weight } = detailPokemon;
    
    const backPokemons = () => {
        window.location.href = "http://localhost:3000/home";
        window.scrollTo(0, 0);
    }
   
    return (
        <div className="containerPokemonDetail">
            {
                (detailPokemon.image) ? 
                <div className="containerData">
                    <div className="allData">
                        <img className="imageDetail" src={image} />
                        <section className="sectionData">                
                            <div className="dataDetail">
                                <span className="prop">Name: </span><span className="value">{name}</span>
                                <span className="prop">Id: </span><span className="value">{id}</span>
                                <span className="prop">Tipo: </span><span>{tipos.map( (type, index) =>
                                    (tipos.length-1 !== index) ?
                                        <span key={type} className="value">{type}, </span>
                                    :   
                                        <span key={type} className="value">{type}</span>
                                    )}</span>
                                

                                <span className="prop">Life: </span><span className="value">{life}</span>
                                <span className="prop">Strength: </span><span className="value">{strength}</span>
                                <span className="prop">Defense: </span><span className="value">{defense}</span>
                                <span className="prop">Speed: </span><span className="value">{speed}</span>
                                <span className="prop">Height: </span><span className="value">{height}</span>
                                <span className="prop">Weight: </span><span className="value">{weight}</span>
                                    
                            </div>
                        </section>
                    </div>
                    <input type="button" id="buttonPokemons" value="Back" onClick={ () => backPokemons()}/>
                </div>
                :
                (<div id="containerLoading">
                    <img id="pokeBolaImg" src= {pokeBola}/>
                    <h1 id="loading">Cargando...</h1>
                </div>)
            }
            
      </div>
      );
  }

  
   
const mapStateToProps = ({ detailPokemon }) => ({ detailPokemon });
  
export default connect(mapStateToProps, { detailData })(PokemonDetail);