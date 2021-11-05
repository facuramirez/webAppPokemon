import { useState } from 'react';
import Style from '../css/createPokemon.module.css';
import { modifyHome } from '../../globalState/Actions.js';
import { connect } from 'react-redux';
import axios from 'axios';
import { BiChevronsRight } from 'react-icons/bi';

function CreatePokemon({modifyHome}) {
  
  let [inputs, setInputs] = useState({
    name: '',
    life: '',
    strength: '',
    defense: '',
    speed: '',
    height: '',
    weigth: '',
    types: []
  });

  let [error, setError] = useState({
    name: '',
    life: '',
    strength: '',
    defense: '',
    speed: '',
    height: '',
    weigth: '',
    types: ''
  });

  const verifyName = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    
    if(!/^[A-Z]+$/i.test(value) || !value) {
      setError({...error, [name]: 'Error!'})
    } else {
      setError({...error, [name]: ''})
    }
    setInputs({...inputs, [name]:value})
  }

  const verify = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    if(!/^([0-9])*$/.test(value) || !value) {
      setError({...error, [name]: 'Error!'});
    } else {
      setError({...error, [name]: ''});
    }
    setInputs({...inputs, [name]: value});
      
  }
  
  const volver = () => {
    modifyHome(false);
    window.scrollTo(0, 0);
  }

  const spanError = {
    border: "1px solid red",
    backgroundColor: "red",
    color: "white",
    padding: "0.1rem 0.5rem 0.1rem 0.5rem",
    borderRadius: "20px",
    fontSize: "15px",
    textAlign: "center",
    height: "23px",
    marginLeft: "5px",
    fontSize: "12px"
  }

  const inputError = {
    backgroundColor: "rgb(245, 125, 125)"
  }

  const checkear = (e) => {
    let check = e.target.checked;
    let name = e.target.name;
    
    if(inputs.types.length === 0 && check){
      setError({...error, types: ''});
    } else if (inputs.types.length === 1 && !check) {
      setError({...error, types: 'Error!'});
    }

    if(check) {
      var index = inputs.types.indexOf(name);
      if(index === -1) setInputs({...inputs, types: [...inputs.types, name]});
    } else {
      let newTypes = inputs.types.filter( unCheck => unCheck !== name);
      setInputs({...inputs, types: newTypes});      
    }
  }

  const create = () => {
      
      if(inputs.name && inputs.life && inputs.strength && inputs.defense && inputs.speed &&
        inputs.height && inputs.weigth && inputs.types.length > 0 &&
        !error.name && !error.life && !error.strength && !error.defense && !error.speed &&
        !error.height && !error.weigth && !error.types
        ) {
          axios.get('http://localhost:3001/pokemons')
          .then(res => res.data.find( pokemon => pokemon.name === inputs.name ))
          .then(res => !res ?   
            (axios({
              method: 'POST',
              url: 'http://localhost:3001/pokemons',
              data: inputs
            })
            .then(res => {
              alert('Pokemon creado con éxito!');
              setInputs({
                ...inputs,
                name:'',
                life: '',
                strength: '',
                defense: '',
                speed: '',
                height: '',
                weigth: '',
                types: []              
              })  
              
              document.querySelector('.input1').checked = false;
              document.querySelector('.input2').checked = false;
              document.querySelector('.input3').checked = false;
              document.querySelector('.input4').checked = false;
              document.querySelector('.input5').checked = false;
              document.querySelector('.input6').checked = false;
              document.querySelector('.input7').checked = false;
              document.querySelector('.input8').checked = false;
              document.querySelector('.input9').checked = false;
              document.querySelector('.input10').checked = false;
              document.querySelector('.input11').checked = false;
              document.querySelector('.input12').checked = false;
              document.querySelector('.input13').checked = false;
              document.querySelector('.input14').checked = false;
              document.querySelector('.input15').checked = false;
              document.querySelector('.input16').checked = false;
              document.querySelector('.input17').checked = false;
              document.querySelector('.input18').checked = false;
              document.querySelector('.input19').checked = false;
              document.querySelector('.input20').checked = false;

              document.querySelector('.input1').focus();

            }))
          :
            (alert('El pokemon tipeado ya existe'))
          )
          .catch(error => console.log('No se pudo agregar el pokemon'))
        
        } else {
          alert('Faltan completar campos!');
        }     
    } 

    return (
      <div className={`${Style.containerCreatePokemon}`}>
        <h1 id={`${Style.titleCreate}`}>CREATE NEW POKEMON</h1>
          
        <div className={`${Style.flexInfo}`}>
          <section className={`${Style.sectionGrid} ${Style.sg1}`}>
            <div>
              <label id={`${Style.labelName}`} className={`${Style.labelsSg1}`}>NAME:</label>
              <input style={(inputs.name && error.name) ? inputError:null} type="text" value={inputs.name} name="name" onChange={(e)=> verifyName(e)}/>
              <span style={(inputs.name && error.name) ? spanError:null}>{(inputs.name && error.name) ? 'Only letters':' '} </span>
            </div>

            <div>
              <label className={`${Style.labelsSg1}`}>Life:</label>
              <input style={(inputs.life && error.life) ? inputError:null} type="text" value={inputs.life} name="life" onChange={(e)=> verify(e)}/>
              <span style={(inputs.life && error.life) ? spanError:null }>{(inputs.life && error.life) ? 'Only numbers':' '}</span>
            </div>

            <div>
              <label className={`${Style.labelsSg1}`}>Strength:</label>
              <input style={error.strength ? inputError:null} type="text" value={inputs.strength} name="strength" onChange={(e)=> verify(e)}/>
              <span style={error.strength ? spanError:null }>{error.strength ? 'Only numbers':' '}</span>
            </div>

            <div>
              <label className={`${Style.labelsSg1}`}>Defense:</label>
              <input style={error.defense ? inputError:null} type="text" value={inputs.defense} name="defense" onChange={(e)=> verify(e)}/>
              <span style={error.defense ? spanError:null }>{error.defense ? 'Only numbers':' '}</span> 
            </div>
            
            <div>
              <label className={`${Style.labelsSg1}`}>Speed:</label>
              <input style={error.speed ? inputError:null} type="text" value={inputs.speed} name="speed" onChange={(e)=> verify(e)}/>
              <span style={error.speed ? spanError:null }>{error.speed ? 'Only numbers':' '}</span>
            </div>

            <div>
              <label className={`${Style.labelsSg1}`}>Height</label>
              <input style={error.height ? inputError:null} type="text" value={inputs.height} name="height" onChange={(e)=> verify(e)}/>
              <span style={error.height ? spanError:null }>{error.height ? 'Only numbers':' '}</span>
            </div>

            <div>
              <label className={`${Style.labelsSg1}`}>Weight:</label>
              <input style={error.weigth ? inputError:null} type="text" value={inputs.weigth} name="weigth" onChange={(e)=> verify(e)}/>
              <span style={error.weigth ? spanError:null }>{error.weigth ? 'Only numbers':' '}</span>
            </div>
          </section>
          
          <section className={`${Style.sectionGrid} ${Style.sg2}`}>
            <div className={`${Style.divTitleTypes} `}>
              <label id={`${Style.titleTypes}`}><BiChevronsRight />Types:</label>
            </div>
            <div className={`${Style.divAllTypes}`}>
              <div>
                <input className={`${Style.inputCheckBox} ${Style.input1}`} type="checkbox" name="bug" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Bug</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input2}`} type="checkbox" name="dark" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Dark</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input3}`} type="checkbox" name="dragon" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Dragon</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input4}`} type="checkbox" name="electric" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Electric</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input5}`} type="checkbox" name="fairy" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Fairy</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input6}`} type="checkbox" name="fighting" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Fighting</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input7}`} type="checkbox" name="fire" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Fire</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input8}`} type="checkbox" name="flying" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Flying</label>
              </div>
              
              <div>
                <input className={`${Style.inputCheckBox} ${Style.input9}`} type="checkbox" name="ghost" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Ghost</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input10}`} type="checkbox" name="grass" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Grass</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input11}`} type="checkbox" name="ground" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Ground</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input12}`} type="checkbox" name="ice" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Ice</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input13}`} type="checkbox" name="normal" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Normal</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input14}`} type="checkbox" name="poison" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Poison</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input15}`} type="checkbox" name="psychic" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Psychic</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input16}`} type="checkbox" name="rock" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Rock</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input17}`} type="checkbox" name="shadow" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Shadow</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input18}`} type="checkbox" name="steel" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Steel</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input19}`} type="checkbox" name="unknown" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Unknown</label>
              </div>

              <div>
                <input className={`${Style.inputCheckBox} ${Style.input20}`} type="checkbox" name="water" onClick={(e)=>checkear(e)}/>
                <label className={`${Style.typesLabels}`}>Water</label>
              </div>
            </div>            
          </section>
        </div>

        <div className={`${Style.buttons}`}>
          <button className={`${Style.buttonsFilter} ${Style.buttonF1}`} value="back" onClick={()=> volver()}>Back</button>
          <button className={`${Style.buttonsFilter} ${Style.buttonF2}`} onClick={()=> create()}>CREATE</button>
        </div>
      </div>
    );
  }
  
  
  export default connect(null, {modifyHome})(CreatePokemon);
  
