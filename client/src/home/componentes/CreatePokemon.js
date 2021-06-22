import { useState } from 'react';
import '../css/createPokemon.css';
import { modifyHome } from '../../globalState/Actions.js';
import { connect } from 'react-redux';
import axios from 'axios';

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
    window.location.reload();
    window.scrollTo(0, 0);
  }

  const spanError = {
    border: "1px solid red",
    backgroundColor: "red",
    color: "white",
    paddingTop: "6px",
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
      <div className="containerCreatePokemon">
        <h1 id="titleCreate">CREATE NEW POKEMON</h1>
                
        <section className="sectionGrid sg1">
          
          <label id="labelName" className="labelsSg1">NAME:</label>
          <input style={error.name ? inputError:null} type="text" value={inputs.name} name="name" onChange={(e)=> verifyName(e)}/>
          <span style={error.name ? spanError:null}>{error.name ? 'Only letters':' '} </span>

          <label className="labelsSg1">Life:</label>
          <input style={error.life ? inputError:null} type="text" value={inputs.life} name="life" onChange={(e)=> verify(e)}/>
          <span style={error.life ? spanError:null }>{error.life ? 'Only numbers':' '}</span>

          <label className="labelsSg1">Strength:</label>
          <input style={error.strength ? inputError:null} type="text" value={inputs.strength} name="strength" onChange={(e)=> verify(e)}/>
          <span style={error.strength ? spanError:null }>{error.strength ? 'Only numbers':' '}</span>

          <label className="labelsSg1">Defense:</label>
          <input style={error.defense ? inputError:null} type="text" value={inputs.defense} name="defense" onChange={(e)=> verify(e)}/>
          <span style={error.defense ? spanError:null }>{error.defense ? 'Only numbers':' '}</span> 

          <label className="labelsSg1">Speed:</label>
          <input style={error.speed ? inputError:null} type="text" value={inputs.speed} name="speed" onChange={(e)=> verify(e)}/>
          <span style={error.speed ? spanError:null }>{error.speed ? 'Only numbers':' '}</span>

          <label className="labelsSg1">Height</label>
          <input style={error.height ? inputError:null} type="text" value={inputs.height} name="height" onChange={(e)=> verify(e)}/>
          <span style={error.height ? spanError:null }>{error.height ? 'Only numbers':' '}</span>

          <label className="labelsSg1">Weight:</label>
          <input style={error.weigth ? inputError:null} type="text" value={inputs.weigth} name="weigth" onChange={(e)=> verify(e)}/>
          <span style={error.weigth ? spanError:null }>{error.weigth ? 'Only numbers':' '}</span>

        </section>
        
        <section className="sectionGrid sg2">
          <div className="typesGrid">
                <label id="titleTypes">Types:</label>
                <input className="inputCheckBox input1" type="checkbox" name="bug" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Bug</label>
                <input className="inputCheckBox input2" type="checkbox" name="dark" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Dark</label>
                <input className="inputCheckBox input3" type="checkbox" name="dragon" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Dragon</label>
                <input className="inputCheckBox input4" type="checkbox" name="electric" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Electric</label>
                <input className="inputCheckBox input5" type="checkbox" name="fairy" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Fairy</label>
                <input className="inputCheckBox input6" type="checkbox" name="fighting" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Fighting</label>
                <input className="inputCheckBox input7" type="checkbox" name="fire" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Fire</label>
                <input className="inputCheckBox input8" type="checkbox" name="flying" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Flying</label>
                <input className="inputCheckBox input9" type="checkbox" name="ghost" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Ghost</label>
                <input className="inputCheckBox input10" type="checkbox" name="grass" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Grass</label>
                <input className="inputCheckBox input11" type="checkbox" name="ground" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Ground</label>
                <input className="inputCheckBox input12" type="checkbox" name="ice" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Ice</label>
                <input className="inputCheckBox input13" type="checkbox" name="normal" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Normal</label>
                <input className="inputCheckBox input14" type="checkbox" name="poison" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Poison</label>
                <input className="inputCheckBox input15" type="checkbox" name="psychic" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Psychic</label>
                <input className="inputCheckBox input16" type="checkbox" name="rock" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Rock</label>
                <input className="inputCheckBox input17" type="checkbox" name="shadow" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Shadow</label>
                <input className="inputCheckBox input18" type="checkbox" name="steel" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Steel</label>
                <input className="inputCheckBox input19" type="checkbox" name="unknown" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Unknown</label>
                <input className="inputCheckBox input20" type="checkbox" name="water" onClick={(e)=>checkear(e)}/>
                <label className="typesLabels">Water</label>
              </div>
            
         </section>

         <div className="buttonsGrid">
            <button className="buttonsFilter buttonF1" value="back" onClick={()=> volver()}>Back</button>
            <button className="buttonsFilter buttonF2" onClick={()=> create()}>CREATE</button>
         </div>
      </div>
    );
  }
  
  
  export default connect(null, {modifyHome})(CreatePokemon);
  
