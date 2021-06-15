import './css/landing.css';
import pokeLanding from '../img/pokeLanding.png';
import pokeTitulo from '../img/pokeTitulo.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
    
    document.body.style.background = 'black';
    
  return (
    <div className="containerLanding">
        <div>  
            <img className="imageLan" src={pokeLanding}  alt="img not found" />
            <img className="imageLanTit" src={pokeTitulo}  alt="img not found" />
            <Link to={'/home'}  >       
                <h1 className="buttonLanding">Go Home</h1>
            </Link>
        </div>
    </div> 
    );
}

export default LandingPage;
