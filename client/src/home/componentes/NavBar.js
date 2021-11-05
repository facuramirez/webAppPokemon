import Style from '../css/navBar.module.css';
import pokeTitulo from '../../img/pokeTitulo.png';
import pokeBola from '../../img/pokebola.png';

function NavBar() {

    const refresh = () => {
        window.location.reload();
    } 
    
    return (
      <div className={`${Style.containerNavBar}`}>
          <img onClick={ () => refresh()} className={`${Style.titleNav}`} src={pokeTitulo} />
          <img className={`${Style.imageNav}`} src={pokeBola} />    
          
      </div> 
      );
  }
  
  export default NavBar;