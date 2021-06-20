import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './css/home.css';
import NavBar from './componentes/NavBar';
import SearchBar from './componentes/SearchBar';
import MenuOptions from './componentes/MenuOptions';
import CreatePokemon from './componentes/CreatePokemon';
import Pokemons from './componentes/Pokemons';
import pattern from '../img/pattern.png';
import { connect } from 'react-redux';
import { getPokemons } from '../globalState/Actions.js';


function HomePage({createPokemon, allPokemons, getPokemons}) {

  document.body.style.backgroundImage = `url(${pattern})`;
  document.body.style.backgroundColor = '#ccc';

  useEffect( () => {
    if (allPokemons.length === 0) getPokemons();    
  },[])
    
    return (
      <div className="containerHome">
              
        <nav className="navBarHome"><NavBar /></nav>
        <section className="menuHome"><MenuOptions /></section>
        <section className="searchHome"><SearchBar /></section>
        {!createPokemon ? (<section className="pokeHome"><Pokemons pokemons={allPokemons}/></section>):
        (<section className="createPokeHome"><CreatePokemon /></section>)
        }     
              
      </div> 
      );
  }

  const mapStateToProps = ({ createPokemon, allPokemons }) => ({ createPokemon, allPokemons })


  export default connect(mapStateToProps, { getPokemons })(HomePage);