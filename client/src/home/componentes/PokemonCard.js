import { Link } from 'react-router-dom';
import '../css/pokemonCard.css';
import unknown from '../../img/unknown.png';

function PokemonCard({name, image, types, poke}) {
    
    return (

      <Link to={`/home/${name}`} className="containerPokemonCard">
        <h1>{name}</h1>
        <img className="image" src={poke < 40 ? image:unknown}/>
        {
          types.map( type => <h3 key={type}>{type}</h3>)
        }
      </Link>
      
      );
  }

  
  export default PokemonCard;
