import '../css/searchBar.css';

function SearchBar() {
    return (
      <div className="containerSearchBar">
          <input className="searchBar" type="text" placeholder="Search by ID..."/>
          <h1>Soy la lupa</h1>
      </div> 
      );
  }
  
  export default SearchBar;