import '../css/footer.css';
import pokebolaAbierta from '../../img/pokebolaAbierta.png'
import henryLogo from '../../img/henryLogo.jpg'
import pokeApp from '../../img/pokeApp2.png'
import { connect } from 'react-redux';
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { FaWhatsappSquare } from 'react-icons/fa';

function Footer({allPokemons}) {
   
    return (
      <div>
        <div className="containerFooter">
          <div className="itemsFooter itemF1">
            <img src={pokebolaAbierta} className="imageFooter" />
          </div>

          <div className="itemsFooter itemF2">
            <section className="contactSection">
              <h3>CONTACTO:</h3>
              <FaWhatsappSquare className="wp"/>
              <a href="https://wa.me/543764227220" target="_blank">+543764227220</a>
              <br/>
              <FaLinkedin className="lk"/>
              <a href="https://www.linkedin.com/in/facundoramirezok" target="_blank">/facundoramirezok</a>
              <br/>
              <GoMarkGithub className="git"/>
              <a href="https://github.com/facuramirez" target="_blank">/facuramirez</a>
            </section>
          </div>

          <div className="itemsFooter containerPokeApp">
          <img src={pokeApp} className="pokeApp" />
          </div>
        </div>

        <div className="author">
          Desarrollado por Facundo Ramírez &copy;
        </div>
      </div> 
      );
  }

  
  const mapStateToProps = ({allPokemons}) => ({allPokemons});
  
  export default connect(mapStateToProps)(Footer);