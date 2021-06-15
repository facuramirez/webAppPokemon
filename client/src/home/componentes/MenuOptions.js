import '../css/menuOptions.css';
import pokemon from '../../img/pikachu.png';

function MenuOptions() {
    return (
      <div className="containerMenuOptions">
          <div className="menuOptions">
            <h3 id="optMenu">OPTIONS MENU</h3>
            <h4 id="filter">Filter</h4>
            <h4 id="sort">Sort</h4>
            <h4 id="create">Create Pokemon</h4>
            <div id="divImg"><img className="imageMenu" src={pokemon} width='120px' /> </div>    
          </div>
      </div> 
      );
  }
  
  export default MenuOptions;