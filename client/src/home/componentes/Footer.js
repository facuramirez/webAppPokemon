import Style from '../css/footer.module.css';
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
        <div className={`${Style.containerFooter}`}>
          <div className={`${Style.itemsFooter} ${Style.itemF1}`}>
            <img src={pokebolaAbierta} className={`${Style.imageFooter}`} />
          </div>

          <div className={`${Style.itemsFooter} ${Style.itemF2}`}>
            <section className={`${Style.contactSection}`}>
              <h3>CONTACTO:</h3>
              <div className={`${Style.info}`}>
                <div>
                  <FaWhatsappSquare className={`${Style.wp}`} />
                  <a href="https://wa.me/543764227220" target="_blank">+543764227220</a>
                </div>
                <div>
                  <FaLinkedin className={`${Style.lk}`} />
                  <a href="https://www.linkedin.com/in/facundoramirezok" target="_blank">/facundoramirezok</a>
                </div>
                <div>
                  <GoMarkGithub className={`${Style.git}`} />
                  <a href="https://github.com/facuramirez" target="_blank">/facuramirez</a>
                </div>
              </div>
            </section>
          </div>

          <div className={`${Style.itemsFooter} ${Style.containerPokeApp}`}>
            <img src={pokeApp} className={`${Style.pokeApp}`} />
          </div>

        </div>

        <div className={`${Style.author}`}>
          Desarrollado por Facundo Ramírez &copy;
        </div>
      </div> 
      );
  }

  
  const mapStateToProps = ({allPokemons}) => ({allPokemons});
  
  export default connect(mapStateToProps)(Footer);