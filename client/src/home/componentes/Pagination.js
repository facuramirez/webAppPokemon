import Style from '../css/pagination.module.css';
import { connect } from 'react-redux';

function Pokemons({ pokemonsPerPage, totalPokemons, paginate}) {
     
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage) ; i++) {
        pageNumbers.push(i);
    }

    return (
      <nav className={`${Style.containerPagination}`}>
            <ul className={`${Style.ulPagination}`}>
                {pageNumbers.map( (number) => (
                    <li key={number} className={`${Style.elements}`} onClick={ () => paginate(number) }>
                        <a className={`${Style.items}`}>{number}</a>
                    </li>
                ))}
            </ul>                       
      </nav> 
      );
  }

  
  const mapStateToProps = ({allPokemons}) => ({allPokemons});
  
  export default connect(mapStateToProps)(Pokemons);