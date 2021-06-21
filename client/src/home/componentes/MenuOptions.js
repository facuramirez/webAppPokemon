import { useState, useEffect } from 'react';
import '../css/menuOptions.css';
import ashPikachu from '../../img/ashPikachu2.png';
import { BiChevronsRight } from 'react-icons/bi';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { modifyHome, filterPokemons, clearPokemons, sortPokemons } from '../../globalState/Actions.js';
import { connect } from 'react-redux';


function MenuOptions( {modifyHome, filterPokemons, clearPokemons, createPokemon, sortPokemons, allPokemons}) {
     
  const [optMenu, setOptMenu] = useState({
    menu: true,
    filter: false,
    sort: false
  });
  
  const filterButton = (e)=>{
    let value = e.target.value;
    if(value === 'back') return setOptMenu({
      ...optMenu,
      menu: true,
      filter: false,
      sort: false
    })

    setOptMenu({
      ...optMenu,
      menu: false,
      [value]: optMenu[value] ? false:true
  
    })
    
  }

  const showCreate = (e) => {
    modifyHome(true);
    let button1 = document.querySelector('#filter');
    let button2 = document.querySelector('#sort');
        
    button1.disabled = true;
    button1.disabled = true;

    button1.classList.add('buttonsMenuDisabled');
    button2.classList.add('buttonsMenuDisabled');
    button1.classList.remove('buttonsMenu');
    button2.classList.remove('buttonsMenu');  
  }

  if(!createPokemon){
    let button1 = document.querySelector('#filter');
    let button2 = document.querySelector('#sort');
    
    if(button1 !== null){
      button1.disabled = false;
      button1.disabled = false;

      button1.classList.remove('buttonsMenuDisabled');
      button2.classList.remove('buttonsMenuDisabled');
      button1.classList.add('buttonsMenu');
      button2.classList.add('buttonsMenu'); 
    }
         
  }

  const applyFilters = (e) => {
       
    let all = document.querySelector('.radioAll');
    let or = document.querySelector('.radioOr');
    let cr = document.querySelector('.radioCr');
    
    let checkBox = document.querySelectorAll('.inputCheckBox');
    var arrayNames = [];
    
    for(var i = 0; i < checkBox.length ; i++) {
      if(checkBox[i].checked) {
        arrayNames.push(checkBox[i].name);
      }
    }
    
    clearPokemons();
    filterPokemons(all, or, cr, arrayNames);        
 
  }

  
  
  const applySorts = (e) => {
    
    var radio1 = document.querySelectorAll('.r1');
    var radio2 = document.querySelectorAll('.r2');
    
    sortPokemons(allPokemons, radio1, radio2);

  } // fin function applySorts

  

    return (
      <div className="containerMenuOptions">
          {optMenu.menu ? (
          <div className="menuOptions">
            <h3 id="optMenu">OPTIONS MENU</h3>
            <button className="buttonsMenu disabled" id="filter" value="filter" onClick={(e)=> filterButton(e)}>Filter</button>
            <button className="buttonsMenu disabled" id="sort" value="sort" onClick={(e)=> filterButton(e)}>Sort</button>
            <button className="buttonsMenu" id="create" onClick={(e)=> showCreate(e)}>Create Pokemon <FaArrowAltCircleRight /></button>
            <div id="divImg"><img className="imageMenu" src={ashPikachu} /> </div>    
          </div>
          ):null
          }


          {optMenu.filter ? (
          <div className="menuOptions">
            <h3 id="optMenu">FILTER</h3>
            <span><BiChevronsRight className="itemIcon itemOne"/></span>

            <input type="radio" className="radio radioAll" name="choice" value="All"/>
            <label className="subtitles subAll" htmlFor="All">All</label>
            <input type="radio" className="radio radioOr" name="choice" value="Origin" />
            <label className="subtitles subOr" htmlFor="Origin">Origin</label>
            <input type="radio" className="radio radioCr" name="choice" value="Created" />
            <label className="subtitles subCr" htmlFor="Created">Created</label>

            <span><BiChevronsRight className="itemIcon itemTwo"/></span>
            <label className="subtitles" id="labelTypes">Select Types:</label>
            <br/>
            <div className="typesGrid">
              <input className="inputCheckBox" type="checkbox" name="bug"/>
              <label className="typesLabels">Bug</label>
              <input className="inputCheckBox" type="checkbox" name="dark"/>
              <label className="typesLabels">Dark</label>
              <input className="inputCheckBox" type="checkbox" name="dragon"/>
              <label className="typesLabels">Dragon</label>
              <input className="inputCheckBox" type="checkbox" name="electric"/>
              <label className="typesLabels">Electric</label>
              <input className="inputCheckBox" type="checkbox" name="fairy"/>
              <label className="typesLabels">Fairy</label>
              <input className="inputCheckBox" type="checkbox" name="fighting"/>
              <label className="typesLabels">Fighting</label>
              <input className="inputCheckBox" type="checkbox" name="fire"/>
              <label className="typesLabels">Fire</label>
              <input className="inputCheckBox" type="checkbox" name="flying"/>
              <label className="typesLabels">Flying</label>
              <input className="inputCheckBox" type="checkbox" name="ghost"/>
              <label className="typesLabels">Ghost</label>
              <input className="inputCheckBox" type="checkbox" name="grass"/>
              <label className="typesLabels">Grass</label>
              <input className="inputCheckBox" type="checkbox" name="ground"/>
              <label className="typesLabels">Ground</label>
              <input className="inputCheckBox" type="checkbox" name="ice"/>
              <label className="typesLabels">Ice</label>
              <input className="inputCheckBox" type="checkbox" name="normal"/>
              <label className="typesLabels">Normal</label>
              <input className="inputCheckBox" type="checkbox" name="poision"/>
              <label className="typesLabels">Poison</label>
              <input className="inputCheckBox" type="checkbox" name="psychic"/>
              <label className="typesLabels">Psychic</label>
              <input className="inputCheckBox" type="checkbox" name="rock"/>
              <label className="typesLabels">Rock</label>
              <input className="inputCheckBox" type="checkbox" name="shadow"/>
              <label className="typesLabels">Shadow</label>
              <input className="inputCheckBox" type="checkbox" name="steel"/>
              <label className="typesLabels">Steel</label>
              <input className="inputCheckBox" type="checkbox" name="unknown"/>
              <label className="typesLabels">Unknown</label>
              <input className="inputCheckBox" type="checkbox" name="water"/>
              <label className="typesLabels">Water</label>
            </div>
            <button className="buttonsFilter buttonF1" value="back" onClick={(e)=> filterButton(e)}>Back</button>
            <button className="buttonsFilter buttonF2" onClick={(e)=> applyFilters(e)}>Apply changes</button>
          </div>
          ):null
          }

          {optMenu.sort ? (
            <div className="menuOptions">
              <h3 id="optMenu">SORT</h3>
              <span><BiChevronsRight className="itemIcon itemOne"/></span>

              <div className="sortGrid">
                <input type="radio" className="radio radioSort r1" name="choice1" value="Asc"/>
                <label className="subtitles labelSort" htmlFor="Asc">Ascending </label>
                <input type="radio" className="radio radioSort r1" name="choice1" value="Desc"/>
                <label className="subtitles labelSort" htmlFor="Desc">Descending </label>
              </div>

              <span><BiChevronsRight className="itemIcon itemOne"/></span>

              <div className="sortGrid">
                <input type="radio" className="radio radioSort r2" name="choice2" value="AZ"/>
                <label className="subtitles labelSort" htmlFor="AZ">Alphabetical </label>
                
                <input type="radio" className="radio radioSort r2" name="choice2" value="Fuerza" />
                <label className="subtitles labelSort" htmlFor="Fuerza">Strength</label>
                
                <input type="radio" className="radio radioSort r2" name="choice2" value="Peso" />
                <label className="subtitles labelSort" htmlFor="Peso">Weigth</label>
               
                <input type="radio" className="radio radioSort r2" name="choice2" value="Altura" />
                <label className="subtitles labelSort" htmlFor="Altura">Heigth</label>
               
              </div>

              <button className="buttonsFilter buttonF1 butSort1" value="back" onClick={(e)=> filterButton(e)}>Back</button>
              <button className="buttonsFilter buttonF2 butSort2" onClick={ (e)=> applySorts(e)}>Apply changes</button>
            </div>
            ):null
          }
      </div>
       
      );
  }

  const mapStateToProps = ({createPokemon, allPokemons}) => ({createPokemon, allPokemons});
  
  export default connect(mapStateToProps, {modifyHome, filterPokemons, clearPokemons, sortPokemons})(MenuOptions);