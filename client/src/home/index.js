import { useEffect } from 'react';
import Style from './css/home.module.css';
import NavBar from './componentes/NavBar';
import SearchBar from './componentes/SearchBar';
import MenuOptions from './componentes/MenuOptions';
import CreatePokemon from './componentes/CreatePokemon';
import Pokemons from './componentes/Pokemons';
import Footer from './componentes/Footer';
import pattern from '../img/pattern.png';
import { connect } from 'react-redux';
import { getPokemons, detailPokemon } from '../globalState/Actions.js';


function HomePage({createPokemon, allPokemons, getPokemons, pokemonName, detailPokemon, detail}) {

  document.body.style.backgroundImage = `repeating-linear-gradient(332deg, hsla(266,0%,30%,0.12) 0px,transparent 2px,hsla(266,0%,30%,0.12) 7px,transparent 9px,hsla(266,0%,30%,0.12) 14px),repeating-linear-gradient(100deg, hsla(266,0%,30%,0.12) 0px,transparent 2px,hsla(266,0%,30%,0.12) 7px,transparent 9px,hsla(266,0%,30%,0.12) 14px),repeating-linear-gradient(0deg, hsla(266,0%,30%,0.15) 0px, hsla(266,0%,30%,0.15) 0px,transparent 0px, transparent 1px,hsla(266,0%,30%,0.15) 1px, hsla(266,0%,30%,0.15) 4px,transparent 4px, transparent 5px,hsla(266,0%,30%,0.15) 5px, hsla(266,0%,30%,0.15) 8px),repeating-linear-gradient(90deg, hsla(266,0%,30%,0.15) 0px, hsla(266,0%,30%,0.15) 0px,transparent 0px, transparent 1px,hsla(266,0%,30%,0.15) 1px, hsla(266,0%,30%,0.15) 4px,transparent 4px, transparent 5px,hsla(266,0%,30%,0.15) 5px, hsla(266,0%,30%,0.15) 8px),linear-gradient(90deg, rgb(58,58,58),rgb(58,58,58))`;
  
  document.body.style.backgroundColor = 'black';
  
  useEffect( () => {
    if (allPokemons.length === 0) getPokemons();
    detailPokemon(pokemonName); 
  },[])

    return (
      <div className={`${Style.containerHome} container-fluid p-0 m-0`}>
        <div className="row container-fluid p-0 m-0">
          <section className="col-12 p-0">
            <NavBar />
          </section>
          
          <section className="col-12 mt-4">
            <MenuOptions />            
          </section>
          
          <section className="col-12 p-0">
            {!createPokemon ? (<Pokemons />):
            (<CreatePokemon />)
            }
          </section>
          </div>
        {/* <nav className="navBarHome"><NavBar /></nav>
        <section className="menuHome"><MenuOptions /></section>
        <section className="searchHome"><SearchBar /></section>
        {!createPokemon ? (<section className="pokeHome"><Pokemons/></section>):
        (<section className="createPokeHome"><CreatePokemon /></section>)
        } */}
        <footer className="footerHome"><Footer /></footer>
              
      </div> 
      );
  }

  const mapStateToProps = ({ createPokemon, allPokemons, detail}) => ({ createPokemon, allPokemons, detail })


  export default connect(mapStateToProps, { getPokemons, detailPokemon })(HomePage);