
// import { Link} from "react-router-dom";

import './style.css';
import Logo from '../../img/bikcraft.svg';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="grid-4">
                    <img src={Logo} alt="Bikcraft" />
                </a>
                <nav className="grid-12 header_menu">
                    <ul>
                        <li><a href="sobre">Sobre</a></li>
                        <li><a href="produtos">Produtos</a></li>
                        <li><a href="portifolio">Portifólio</a></li>
                        <li><a href="contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
