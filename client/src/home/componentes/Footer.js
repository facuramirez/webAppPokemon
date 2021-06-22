import '../css/footer.css';
import pokebolaAbierta from '../../img/pokebolaAbierta.png'
import henryLogo from '../../img/henryLogo.jpg'
import { connect } from 'react-redux';

function Footer({allPokemons}) {
   
    return (
      <div className="containerFooter">
          <div className="itemsFooter itemF1">
            <img src={pokebolaAbierta} className="imageFooter" />
          </div>

          <div className="itemsFooter itemF2">
            <img src={henryLogo} className="imageHenry" />
            <span id="madeBy">Made by FACU</span>
          </div>

          <div className="itemsFooter itemF3">
            
            <span className="informationSpans info">CONTACT INFORMATION:</span>
            <br/>
            <span className="informationSpans name">Name: Facundo Ramírez</span>
            <span className="informationSpans ig">Instagram: facuramirez</span>
            <span className="informationSpans ph">Phone: +543764227220</span>
          </div>
      </div> 
      );
  }

  
  const mapStateToProps = ({allPokemons}) => ({allPokemons});
  
  export default connect(mapStateToProps)(Footer);