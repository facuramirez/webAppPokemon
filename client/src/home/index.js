import { Link } from 'react-router-dom';
import './css/home.css';
import NavBar from './componentes/NavBar';
import SearchBar from './componentes/SearchBar';
import MenuOptions from './componentes/MenuOptions';
import CreatePokemon from './componentes/CreatePokemon';
import pattern from '../img/pattern.png';
import { connect } from 'react-redux';


function HomePage({createPokemon}) {

  document.body.style.backgroundImage = `url(${pattern})`;
  document.body.style.backgroundColor = '#ccc';
    
    return (
      <div className="containerHome">
              
        <nav className="navBarHome"><NavBar /></nav>
        <section className="menuHome"><MenuOptions /></section>
        <section className="searchHome"><SearchBar /></section>
        {!createPokemon ? (<section className="pokeHome">ALL POKEMONS</section>):
        (<section className="createPokeHome"><CreatePokemon /></section>)
        }     
              
      </div> 
      );
  }

  const mapStateToProps = ({ createPokemon }) => ({ createPokemon })


  export default connect(mapStateToProps)(HomePage);