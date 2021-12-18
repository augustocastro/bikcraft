
import './style.css';

import Passeio from '../../../img/produtos/passeio.svg';
import Esporte from '../../../img/produtos/esporte.svg';
import Retro from '../../../img/produtos/retro.svg';

function Produtos() {
    return (
        <section data-anime="1600"  className="container produtos fadeInDown">
            <h2 className="subtitulo">Produtos</h2>
            <ul className="produtos_lista">
                <li className="grid-1-3">
                    <div className="produtos_icone">
                        <img src={Passeio} alt="Bikcraft Passeio" />
                    </div>
                    <h3>Passeio</h3>
                    <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</p>
                </li>
                <li className="grid-1-3">
                    <div className="produtos_icone">
                        <img src={Esporte} alt="Bikcraft Esporte" />
                    </div>
                    <h3>Esporte</h3>
                    <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</p>
                </li>
                <li className="grid-1-3">
                    <div className="produtos_icone">
                        <img src={Retro} alt="Bikcraft Retrô" />
                    </div>
                    <h3>Retrô</h3>
                    <p>Ainda assim, existem dúvidas a respeito de como a necessidade de renovação.</p>
                </li>
            </ul>

            <div className="call">
                <p>clique aqui e veja os detalhes dos produtos</p>
                <a href="produtos.html" className="btn btn-preto">Produtos</a>
            </div>
        </section>
    );
}

export default Produtos;
