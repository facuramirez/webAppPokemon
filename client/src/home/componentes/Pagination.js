import '../css/pagination.css';
import { connect } from 'react-redux';

function Pokemons({ pokemonsPerPage, totalPokemons, paginate}) {
     
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage) ; i++) {
        pageNumbers.push(i);
    }

    return (
      <nav className="containerPagination">
            <ul className="ulPagination">
                {pageNumbers.map( (number) => (
                    <li key={number} className="elements" onClick={ () => paginate(number) }>
                        <a className="items">{number}</a>
                    </li>
                ))}
            </ul>                       
      </nav> 
      );
  }

  
  const mapStateToProps = ({allPokemons}) => ({allPokemons});
  
  export default connect(mapStateToProps)(Pokemons);