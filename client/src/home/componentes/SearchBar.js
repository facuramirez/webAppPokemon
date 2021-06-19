import '../css/searchBar.css';
import { FcSearch } from 'react-icons/fc';



function SearchBar() {
    return (
      <div className="containerSearchBar">
          <input className="searchBar" type="text" placeholder="Search by ID or Name..."/>
          <h1 id="containerLupa"> <FcSearch className="lupa"/> </h1>
      </div> 
      );
  }
  
  export default SearchBar;