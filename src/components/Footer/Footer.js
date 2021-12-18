
import './style.css';

import Facebook from '../../img/redes-sociais/facebook.svg';
import Instragam from '../../img/redes-sociais/instagram.svg';
import Twitter from '../../img/redes-sociais/twitter.svg';

function Footer() {
    return (
        <footer>

<section className="quebra">
                <blockquote className="quote-externo container">
                    <p>
                        "o verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida
                        cotidiana."
                    </p>
                    <cite>WILLIAM MORRIS</cite>
                </blockquote>
            </section>
        <div className="footer">
            <div className="container">
                <div className="grid-8 footer_historia">
                    <h3>Nossa História</h3>
                    <p>O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida
                        cotidiana. interesse por todos os detalhes da vida cotidiana.
                        cotidiana. interesse por todos os detalhes da vida cotidiana
                    </p>
                </div>
                <div className="grid-4 footer_contato">
                    <h3>Contato</h3>
                    <ul>
                        <li>- 21 23232-4343</li>
                        <li>- contato@bikcraft.com</li>
                        <li>- Botafogo - RJ</li>
                    </ul>
                </div>

                <div className="grid-4 footer_redes">
                    <h3>Redes Sociais</h3>
                    <ul>
                        <li><a href="http://facebook.com" target="_blank"><img src={Facebook} /></a></li>
                        <li><a href="http://instagram.com" target="_blank"><img src={Instragam} /></a></li>
                        <li><a href="http://twitter.com" target="_blank"><img src={Twitter} /></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="copy">
            <div className="container">
                <p className="grid-16">Bikcraft 2021 - Alguns direitos reservados</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
