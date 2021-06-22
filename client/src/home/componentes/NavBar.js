import '../css/navBar.css';
import pokeTitulo from '../../img/pokeTitulo.jpg';
import pokeBola from '../../img/pokebola.jpg';

function NavBar() {

    const refresh = () => {
        window.location.reload();
    } 
    
    return (
      <div className="containerNavBar">
          <img onClick={ () => refresh()} className="imageNavBar imageTitulo" src={pokeTitulo} />
          <img className="imageNavBar imageBola" src={pokeBola} />    
          
      </div> 
      );
  }
  
  export default NavBar;