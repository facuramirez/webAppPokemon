import '../css/searchBar.css';
import { FcSearch } from 'react-icons/fc';
import { searchPokemon } from '../../globalState/Actions';
import { connect } from 'react-redux';

function SearchBar({ searchPokemon }) {

    const search = (e) => {
        let value = document.querySelector('.searchBar').value;
        searchPokemon(value);                
    }

    return (
      <div className="containerSearchBar">
          <input className="searchBar" onChange={ (e) => e.target.value} type="text" placeholder="Search by ID or Name..."/>
          <h1 onClick={ (e) => search(e)} id="containerLupa"> <FcSearch className="lupa"/> </h1>
      </div> 
      );
  }
  
  export default connect(null, { searchPokemon })(SearchBar);