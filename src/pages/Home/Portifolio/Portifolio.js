import { Link } from 'react-router-dom';

import './style.css';

import Passeio from '../../../img/portfolio/passeio.jpg';
import Esporte from '../../../img/portfolio/esporte.jpg';
import Retro from '../../../img/portfolio/retro.jpg';


function Portifolio() {
    return (
        <section className="portifolio">
            <div className="container">
                <h2 className="subtitulo">Portifólio</h2>
                <ul className="portifolio_lista">
                    <li className="grid-8"><img src={Retro} alt="Bicicleta Retro" /></li>
                    <li className="grid-8"><img src={Passeio} alt="Bicicleta Passeio" /></li>
                    <li className="grid-16"><img src={Esporte} alt="Bicicleta Esporte" /></li>
                </ul>

                <div className="call">
                    <p>Connheça mais o nosso portifólio</p>
                    <Link to="/portifolio" className="btn">Portifólio</Link>
                </div>
            </div>
        </section>
    );
}

export default Portifolio;
