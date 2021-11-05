import Style from './css/landing.module.css';
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
    <div className={`${Style.containerLanding} container-fluid`}>
        <div className={`${Style.containerFlex} row`} >
            <img className={`${Style.imageLan} col-5 mx-auto`} src={pokeLanding}  alt="img not found" />
            <img className={`${Style.imageLanTit} col-5 mx-auto`} src={pokeTitulo}  alt="img not found" />
            <div className={`${Style.buttonLanding} col-7 mx-auto text-center`} >
              <Link to={'/home'} className="col-7 mx-auto">
                  <h1>Go Home</h1>
              </Link>
            </div>
        </div>
    </div> 
    );
}

// const mapStateToProps = ({ createPokemon, allPokemons }) => ({ createPokemon, allPokemons })

  export default connect(null, { getPokemons })(LandingPage);
