import Style from '../css/pokemonDetail.module.css';
import { useEffect } from 'react';
import pokeBola from '../../img/pokebolaBg.png';
import { detailData, clearData } from '../../globalState/Actions.js'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PokemonDetail({ nameDet, detailData, detailPokemon }) {
    let history = useHistory();
    useEffect( async () => {
        clearData();
        detailData(nameDet);
    }, [])
      
    var { name, image, tipos, id, life, strength, defense, speed, height, weight } = detailPokemon;
    
    const backPokemons = () => {
        history.push('/home');
        window.scrollTo(0, 0);
    }
   
    return (
        <div className={`${Style.containerPokemonDetail}`}>
            {
                (detailPokemon.image) ? 
                <div className={`${Style.containerData}`}>
                    <div className={`${Style.allData}`}>
                        <img className={`${Style.imageDetail}`} src={image} />
                        <section className={`${Style.sectionData}`}>
                            <div className={`${Style.dataDetail}`}>
                                <span className={`${Style.prop}`}>Name: </span>
                                <span className={`${Style.value}`}>{name}</span>

                                <span className={`${Style.prop}`}>Id: </span>
                                <span className={`${Style.value}`}>{id}</span>
                                
                                <span className={`${Style.prop}`}>Tipo: </span>
                                <span className={`${Style.value}`}>{tipos.map( (type, index) =>
                                    (tipos.length-1 !== index) ?
                                        <span className={``} key={type} >{type}, </span>
                                    :   
                                        <span className={``} key={type} >{type}</span>
                                    )}</span>

                                <span className={`${Style.prop}`}>Life: </span>
                                <span className={`${Style.value}`}>{life}</span>
                                
                                <span className={`${Style.prop}`}>Strength: </span>
                                <span className={`${Style.value}`}>{strength}</span>
                                
                                <span className={`${Style.prop}`}>Defense: </span>
                                <span className={`${Style.value}`}>{defense}</span>
                                
                                <span className={`${Style.prop}`}>Speed: </span>
                                <span className={`${Style.value}`}>{speed}</span>
                                
                                <span className={`${Style.prop}`}>Height: </span>
                                <span className={`${Style.value}`}>{height}</span>

                                <span className={`${Style.prop}`}>Weight: </span>
                                <span className={`${Style.value}`}>{weight}</span>
                                    
                            </div>
                        </section>
                    </div>
                    <input type="button" className={``} id={`${Style.buttonPokemons}`} value="Back" onClick={ () => backPokemons()}/>
                </div>
                :
                (<div id={`${Style.containerLoading}`}>
                    <img id={`${Style.pokeBolaImg}`} src= {pokeBola}/>
                    <h1 id={`${Style.loading}`}>Cargando...</h1>
                </div>)
            }
            
      </div>
      );
  }

  
   
const mapStateToProps = ({ detailPokemon }) => ({ detailPokemon });
  
export default connect(mapStateToProps, { detailData })(PokemonDetail);