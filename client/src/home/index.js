import { Link } from 'react-router-dom';
import './css/home.css';
import NavBar from './componentes/NavBar';
import SearchBar from './componentes/SearchBar';
import MenuOptions from './componentes/MenuOptions';
import pattern from '../img/pattern.png';

function HomePage() {

  document.body.style.backgroundImage = `url(${pattern})`;
  document.body.style.backgroundColor = 'white';
    
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