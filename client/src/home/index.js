import { useEffect } from 'react';
import './css/home.css';
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

  document.body.style.backgroundImage = `url(${pattern})`;
  document.body.style.backgroundColor = '#ccc';
  
  useEffect( () => {
    if (allPokemons.length === 0) getPokemons();
    detailPokemon(pokemonName); 
  },[])
  
  useEffect( () => {
    console.log('ENTRO ACA')
       
  })

    return (
      <div className="containerHome">
              
        <nav className="navBarHome"><NavBar /></nav>
        <section className="menuHome"><MenuOptions /></section>
        <section className="searchHome"><SearchBar /></section>
        {!createPokemon ? (<section className="pokeHome"><Pokemons/></section>):
        (<section className="createPokeHome"><CreatePokemon /></section>)
        }
        <footer className="footerHome"><Footer /></footer>
              
      </div> 
      );
  }

  const mapStateToProps = ({ createPokemon, allPokemons, detail}) => ({ createPokemon, allPokemons, detail })


  export default connect(mapStateToProps, { getPokemons, detailPokemon })(HomePage);