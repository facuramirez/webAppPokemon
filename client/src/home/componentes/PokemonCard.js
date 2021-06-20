import '../css/pokemonCard.css';

function PokemonCard({name, image, types}) {
   
    return (
      <div className="containerPokemonCard">
        <h1>{name}</h1>
        <img className="image" src={image}/>
        {
          types.map( type => <h3 key={type}>{type}</h3>)
        }
      </div> 
      );
  }

  
  export default PokemonCard;