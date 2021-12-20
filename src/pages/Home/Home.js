
import { Link } from 'react-router-dom';

import './style.css';

import Produtos from './Produtos/Produtos';
import Portifolio from './Portifolio/Portifolio';

function Home() {
    return (
        <div>
            <section className="introducao">
                <div className="container">
                    <h1 data-anime="400" className="fadeInDown">Bicicletas Feitas a Mão</h1>
                    <blockquote data-anime="800" className="quote-externo fadeInDown">
                        <p>
                            "não tenha nada em sua casa que você não considere útil ou acredita ser bonito."
                        </p>
                        <cite>WILLIAM MORRIS</cite>
                    </blockquote>
                    <Link data-anime="1200" to="/produtos" className="btn">Orçamento</Link>
                </div>
            </section>

            <Produtos />
            <Portifolio />
        </div>
    );
}

export default Home;
