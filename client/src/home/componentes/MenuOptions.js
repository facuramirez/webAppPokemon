import { useState } from 'react';
import '../css/menuOptions.css';
import ashPikachu from '../../img/ashPikachu2.png';
import { BiChevronsRight } from 'react-icons/bi';

function MenuOptions() {
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
      [e.target.value]: optMenu[value] ? false:true
  
    })    
  }

    return (
      <div className="containerMenuOptions">
          {optMenu.menu ? (
          <div className="menuOptions">
            <h3 id="optMenu">OPTIONS MENU</h3>
            <button className="buttonsMenu" id="filter" value="filter" onClick={(e)=> filterButton(e)}>Filter</button>
            <button className="buttonsMenu" id="sort" value="sort" onClick={(e)=> filterButton(e)}>Sort</button>
            <button className="buttonsMenu" id="create">Create Pokemon</button>
            <div id="divImg"><img className="imageMenu" src={ashPikachu} /> </div>    
          </div>
          ):null
          }


          {optMenu.filter ? (
          <div className="menuOptions">
            <h3 id="optMenu">FILTER</h3>
            <span><BiChevronsRight className="itemIcon itemOne"/></span>

            <input type="radio" className="radio radioAll" name="choice" value="All"/>
            <label className="subtitles subAll" for="All">All</label>
            <input type="radio" className="radio radioOr" name="choice" value="Origin" />
            <label className="subtitles subOr" for="Origin">Origin</label>
            <input type="radio" className="radio radioCr" name="choice" value="Created" />
            <label className="subtitles subCr" for="Created">Created</label>

            <span><BiChevronsRight className="itemIcon itemTwo"/></span>
            <label className="subtitles" id="labelTypes">Types:</label>
            <br/>
            <div className="typesGrid">
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Bug</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Dark</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Dragon</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Electric</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Fairy</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Fighting</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Fire</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Flying</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Ghost</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Grass</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Ground</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Ice</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Normal</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Poison</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Psychic</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Rock</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Shadow</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Steel</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Unknown</label>
              <input className="inputCheckBox" type="checkbox" />
              <label className="typesLabels">Water</label>
            </div>
            <button className="buttonsFilter buttonF1" value="back" onClick={(e)=> filterButton(e)}>Back</button>
            <button className="buttonsFilter buttonF2">Apply changes</button>
          </div>
          ):null
          }

          {optMenu.sort ? (
            <div className="menuOptions">
              <h3 id="optMenu">SORT</h3>
              <span><BiChevronsRight className="itemIcon itemOne"/></span>

              <div className="sortGrid">
                <input type="radio" className="radio radioSort" name="choice" value="AZ"/>
                <label className="subtitles subAll" for="AZ">Alfabético (ascendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="ZA" />
                <label className="subtitles subOr" for="ZA">Alfabético (descendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="FuerzaA" />
                <label className="subtitles subCr" for="FuerzaA">Fuerza (ascendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="FuerzaD" />
                <label className="subtitles subCr" for="FuerzaD">Fuerza (descendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="PesoA" />
                <label className="subtitles subCr" for="PesoA">Peso (ascendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="PesoD" />
                <label className="subtitles subCr" for="PesoD">Peso (descendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="AlturaA" />
                <label className="subtitles subCr" for="AlturaA">Altura (ascendente)</label>
                <input type="radio" className="radio radioSort" name="choice" value="AlturaD" />
                <label className="subtitles subCr" for="AlturaD">Altura (descendente)</label>
              </div>

              <button className="buttonsFilter buttonF1 butSort1" value="back" onClick={(e)=> filterButton(e)}>Back</button>
              <button className="buttonsFilter buttonF2 butSort2">Apply changes</button>
            </div>
            ):null
          }
      </div>
       
      );
  }
  
  export default MenuOptions;