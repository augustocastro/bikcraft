
import './style.css';

import Facebook from '../../img/redes-sociais/facebook.svg';
import Instragam from '../../img/redes-sociais/instagram.svg';
import Twitter from '../../img/redes-sociais/twitter.svg';

import Endereco from '../../img/endereco-bikcraft.jpg';


function Contato() {
    return (
        <div>
            <section className="introducao-interna interna_contato">
                <div className="container">
                    <h1 data-anime="400" className="fadeInDown">Contato</h1>
                    <p data-anime="800" className="fadeInDown">tire suas dúvidas com a gente</p>
                </div>
            </section>

            <section data-anime="1200" className="contato container fadeInDown">
                <form id="form_orcamento" method="POST" action="./enviar.php" className="contato_form grid-8 formphp">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" required />

                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" required />

                    <label for="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone" />

                    <label className="nao-aparece">Se você não é um robô, deixe em banco</label>
                    <input className="nao-aparece" type="text" name="leaveblank" />

                    <label className="nao-aparece">Se você não é um robô, não mude esse campo</label>
                    <input className="nao-aparece" type="text" name="dontchange" value="http://" />

                    <label for="mensagem">Mensagem</label>
                    <textarea type="text" id="mensagem" name="mensagem" required></textarea>

                    <button id="enviar" name="enviar" type="submit" className="btn btn-preto">Enviar</button>
                </form>

                <div className="contato_dados grid-8">
                    <h3>Dados</h3>
                    <span>+55 21 93223 3232</span>
                    <span>orcamento@bikcraft.com</span>
                    <span>Rua Ali Perto - Botafogo</span>
                    <span>Rio de Janeiro - RJ - Brasil</span>

                    <h3>Redes Sociais</h3>
                    <ul>
                        <li><a href="http://facebook.com" target="_blank"><img src={Facebook} /></a>
                        </li>
                        <li><a href="http://instagram.com" target="_blank"><img src={Instragam} /></a></li>
                        <li><a href="http://twitter.com" target="_blank"><img src={Twitter} /></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="container contato_mapa">
                <a href="http://google.com" className="grid-16" target="_blank"><img src={Endereco} alt="Endereço da Bikecraft" /></a>
            </section>
        </div>
    );
}

export default Contato;
