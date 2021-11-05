import Style from '../css/searchBar.module.css';
import { FcSearch } from 'react-icons/fc';
import { searchPokemon, getPokemons } from '../../globalState/Actions';
import { connect } from 'react-redux';

function SearchBar({ searchPokemon, getPokemons }) {

    const search = (e) => {
        let value = document.querySelector('.searchBar').value;
        if(!value) return getPokemons();
        searchPokemon(value);         
    }

    return (
      <div className={`${Style.containerSearchBar}`}>
          <input className={`${Style.searchBar} searchBar`} onChange={ (e) => e.target.value} type="text" placeholder="Search by ID or Name..."/>
          <h1 onClick={ (e) => search(e)} id={`${Style.containerLupa}`}> <FcSearch className={`${Style.lupa}`}/> </h1>
      </div> 
      );
  }
  
  export default connect(null, { searchPokemon, getPokemons })(SearchBar);