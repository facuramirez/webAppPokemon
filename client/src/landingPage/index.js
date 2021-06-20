import './css/landing.css';
import { useEffect } from 'react';
import pokeLanding from '../img/pokeLanding.png';
import pokeTitulo from '../img/pokeTitulo.jpg';
import { Link } from 'react-router-dom';
import { getPokemons } from '../globalState/Actions.js';
import { connect } from 'react-redux';

function LandingPage({ getPokemons }) {
    useEffect( () => {
        getPokemons();
      },[])
      
    document.body.style.backgroundColor = 'black';
    
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

// const mapStateToProps = ({ createPokemon, allPokemons }) => ({ createPokemon, allPokemons })

  export default connect(null, { getPokemons })(LandingPage);
