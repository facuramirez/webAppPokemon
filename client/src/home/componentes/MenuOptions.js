import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Style from '../css/menuOptions.module.css';
import { BiChevronsRight } from 'react-icons/bi';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { modifyHome, filterPokemons, clearPokemons, sortPokemons } from '../../globalState/Actions.js';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';


function MenuOptions( {modifyHome, filterPokemons, clearPokemons, createPokemon, sortPokemons, allPokemons}) {

  let buttonsFS = useSelector(state => state['createPokemon']);

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

    modifyHome(false);
    
  }

  const showCreate = (e) => {
    
    window.scrollTo(0, 0);
    
    modifyHome(true);
    
    let button1 = document.querySelector('#filter');
    let button2 = document.querySelector('#sort');

    // button1.classList.add('menuOptions_buttonsMenuDisabled__10xV1');
    // button2.classList.add('menuOptions_buttonsMenuDisabled__10xV1');
    // button1.classList.remove('buttonsMenu');
    // button2.classList.remove('buttonsMenu');
  
  }

  // if(!createPokemon){
  //   let button1 = document.querySelector('#filter');
  //   let button2 = document.querySelector('#sort');
    
  //   if(button1 !== null){
  //     button1.disabled = false;
  //     button1.disabled = false;

  //     button1.classList.remove('menuOptions_buttonsMenuDisabled__10xV1');
  //     button2.classList.remove('menuOptions_buttonsMenuDisabled__10xV1');
  //     button1.classList.add('buttonsMenu');
  //     button2.classList.add('buttonsMenu'); 
  //   }
         
  // }

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
    window.scrollTo(0, 0);
    clearPokemons();
    filterPokemons(all, or, cr, arrayNames);        
 
  }

  
  
  const applySorts = (e) => {
    
    var radio1 = document.querySelectorAll('.r1');
    var radio2 = document.querySelectorAll('.r2');
    
    sortPokemons(allPokemons, radio1, radio2);

  } // fin function applySorts
  
  

    return (
      <div className={`${Style.containerMenuOptions}`}>
          {optMenu.menu ? (
          <div className={`${Style.optionsMenu} ${Style.optionsMenu1}`}>
            <h3 id={`${Style.optMenu}`}>OPTIONS MENU</h3>
            <button className={`${Style.buttonsMenu} ${buttonsFS ? 'd-none':null}`} id={`${Style.filter}`} value="filter" 
               onClick={(e)=> filterButton(e)}>Filter</button>
            <button className={`${Style.buttonsMenu} ${buttonsFS ? 'd-none':null}`} id={`${Style.sort}`} value="sort" onClick={(e)=> filterButton(e)}>Sort</button>
            <button className={`${Style.buttonsMenu} ${buttonsFS ? 'd-none':null}`} id={`create`} onClick={(e)=> showCreate(e)}>Create Pokemon</button>
            <div className={`${Style.divSearch} ${buttonsFS ? 'd-none':null}`}>
              <SearchBar />
              </div>
            {/* <div id="divImg"><img className="imageMenu" src={ashPikachu} /> </div>     */}
          </div>
          ):null
          }

          {optMenu.filter ? (
          <div className={`${Style.optionsMenu} ${Style.optionsFilter} row`}>
            <h3 id={`${Style.optMenu}`} className={`col-12`}>FILTER</h3>
            <section className={`${Style.section1} col-12 col-sm-4 col-md-4 col-lg-3 mt-3`}>
              <span><BiChevronsRight className={`${Style.itemIcon} ${Style.itemOne}`}/>
                <label className={`${Style.subtitles}`} id={Style.labelTypes}>Select Origin:</label>
              </span>
              <br/>
              <input type="radio" className="radio radioAll" name="choice" value="All"/>
              <label className={`${Style.subtitles} ${Style.subAll}`} htmlFor="All">All</label>
              <br/>
              <input type="radio" className="radio radioOr mt-1" name="choice" value="Origin" />
              <label className={`${Style.subtitles} ${Style.subOr}`} htmlFor="Origin">Original</label>
              <br/>
              <input type="radio" className="radio radioCr mt-1" name="choice" value="Created" />
              <label className={`${Style.subtitles} ${Style.subCr}`} htmlFor="Created">Created</label>
            </section>

            <section className={`${Style.section2} col-12 col-sm-8 col-md-8 col-lg-6 mt-3`}>
              <span><BiChevronsRight className="itemIcon itemTwo"/>
                <label className={`${Style.subtitles}`} id={Style.labelTypes}>Select Types:</label>
              </span>
              
              <div className={`row`}>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input type="checkbox" name="bug"/>
                  <label>Bug</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="dark"/>
                  <label className="typesLabels">Dark</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="dragon"/>
                  <label className="typesLabels">Dragon</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="electric"/>
                  <label className="typesLabels">Electric</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="fairy"/>
                  <label className="typesLabels">Fairy</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="fighting"/>
                  <label className="typesLabels">Fighting</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="fire"/>
                  <label className="typesLabels">Fire</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="flying"/>
                  <label className="typesLabels">Flying</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                  <input className="inputCheckBox" type="checkbox" name="ghost"/>
                  <label className="typesLabels">Ghost</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="grass"/>
                <label className="typesLabels">Grass</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="ground"/>
                <label className="typesLabels">Ground</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="ice"/>
                <label className="typesLabels">Ice</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="normal"/>
                <label className="typesLabels">Normal</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="poision"/>
                <label className="typesLabels">Poison</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="psychic"/>
                <label className="typesLabels">Psychic</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="rock"/>
                <label className="typesLabels">Rock</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="shadow"/>
                <label className="typesLabels">Shadow</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="steel"/>
                <label className="typesLabels">Steel</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="unknown"/>
                <label className="typesLabels">Unknown</label>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <input className="inputCheckBox" type="checkbox" name="water"/>
                <label className="typesLabels">Water</label>
                </div>
              </div>
            </section>
            <section className={`${Style.section3} col-12 col-lg-3 mt-3 text-center`}>
              <button className={`${Style.buttonsFilter} ${Style.buttonF1}`} value="back" onClick={(e)=> filterButton(e)}>Back</button>
              <button className={`${Style.buttonsFilter} ${Style.buttonF2}`} onClick={(e)=> applyFilters(e)}>Apply changes</button>
            </section>
          </div>
          ):null
          }

          {optMenu.sort ? (
            <div className={`${Style.optionsMenu} ${Style.optionsFilter} row`}>
              <h3 id={`${Style.optMenu}`} className="col-12">SORT</h3>
              <section className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3 text-sm-center text-md-center text-lg-center">
                  <div className="row">
                  <label className={`${Style.subtitles} col-7 mx-auto text-start`} id={Style.labelTypes}><BiChevronsRight className="itemIcon itemOne"/>First Filter</label>
                    <div className="col-7 mx-auto text-start">
                      <input type="radio" className="radio radioSort r1" name="choice1" value="Asc"/>
                      <label className="subtitles labelSort" htmlFor="Asc">Ascending</label>
                    </div>
                    <div className="col-7 mx-auto text-start">
                      <input type="radio" className="radio radioSort r1" name="choice1" value="Desc"/>
                      <label className="subtitles labelSort" htmlFor="Desc">Descending</label>
                    </div>
                  </div>
                  
              </section>

              <section className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3 text-center text-md-center text-lg-center">
                  <div className="row">
                    <label className={`${Style.subtitles} col-7 mx-auto text-start`} id={Style.labelTypes}><BiChevronsRight className="itemIcon itemOne"/>Second Filter</label>
                    <div className="col-7 mx-auto text-start">
                      <input type="radio" className="radio radioSort r2" name="choice2" value="AZ"/>
                      <label className="subtitles labelSort" htmlFor="AZ">Alphabetical </label>
                    </div>
                    <div className="col-7 mx-auto text-start">
                      <input type="radio" className="radio radioSort r2" name="choice2" value="Fuerza" />
                      <label className="subtitles labelSort" htmlFor="Fuerza">Strength</label>
                    </div>
                    <div className="col-7 mx-auto text-start">
                      <input type="radio" className="radio radioSort r2" name="choice2" value="Peso" />
                      <label className="subtitles labelSort" htmlFor="Peso">Weigth</label>
                    </div>
                    <div className="col-7 mx-auto text-start">
                      <input type="radio" className="radio radioSort r2" name="choice2" value="Altura" />
                      <label className="subtitles labelSort" htmlFor="Altura">Heigth</label>
                    </div>
                  </div>
              </section>
              <section className={`${Style.section3} ${Style.buttonsSort} col-12 col-lg-4 mt-1 text-center`}>
                <button className={`${Style.buttonsFilter} ${Style.buttonF1}`} value="back" onClick={(e)=> filterButton(e)}>Back</button>
                <button className={`${Style.buttonsFilter} ${Style.buttonF2}`} onClick={ (e)=> applySorts(e)}>Apply changes</button>
              </section>
            </div>
            ):null
          }
      </div>
       
      );
  }

  const mapStateToProps = ({createPokemon, allPokemons}) => ({createPokemon, allPokemons});
  
  export default connect(mapStateToProps, {modifyHome, filterPokemons, clearPokemons, sortPokemons})(MenuOptions);