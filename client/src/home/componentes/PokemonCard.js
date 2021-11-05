import { Link } from 'react-router-dom';
import Style from '../css/pokemonCard.module.css';
import unknown from '../../img/unknown.png';

function PokemonCard({name, image, types, poke}) {
    
    return (
      <div>
        <Link to={`/home/${name}`} className={`${Style.containerPokemonCard} d-none d-md-flex d-lg-flex`}>
          <h1 className={`${Style.title}`}>{name}</h1>
          <img className={`${Style.image}`} src={image}/>
          <div className={``}>
          {
            types.map( type => <h3 className={`${Style.types}`} key={type}>{type}</h3>)
          }
          </div>
        </Link>

        <Link to={`/home/${name}`} className={`${Style.containerPokemonCard} d-flex d-md-none d-lg-none`}>
          <img className={`${Style.image}`} src={image}/>
          <div className={`${Style.info}`}>
            <h1 className={`${Style.title}`}>{name}</h1>  
            <div className={``}>
            {
              types.map( type => <h3 className={`${Style.types}`} key={type}>{type}</h3>)
            }
            </div>
          </div>
        </Link>
      </div>
      );
  }

  
  export default PokemonCard;
