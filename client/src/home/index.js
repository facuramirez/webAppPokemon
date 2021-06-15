import { Link } from 'react-router-dom';
import './css/home.css';
import NavBar from './componentes/NavBar';
import SearchBar from './componentes/SearchBar';
import MenuOptions from './componentes/MenuOptions';
import pxGray from '../img/pxgray.png';

function HomePage() {

  document.body.style.background = "white";

    return (
      <div className="containerHome">
              
        <nav className="navBarHome"><NavBar /></nav>
        <section className="menuHome"><MenuOptions /></section>
        <section className="searchHome"><SearchBar/></section>
        <section className="pokeHome">POKEMONS</section>
        
      </div> 
      );
  }
  
  export default HomePage;