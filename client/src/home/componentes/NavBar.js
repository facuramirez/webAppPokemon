import '../css/navBar.css';
import pokeTitulo from '../../img/pokeTitulo.jpg';
import pokeBola from '../../img/pokebola.jpg';

function NavBar() {
    return (
      <div className="containerNavBar">
          <img className="imageNavBar imageTitulo" src={pokeTitulo} />
          <img className="imageNavBar imageBola" src={pokeBola} />    
          
      </div> 
      );
  }
  
  export default NavBar;