import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './style.css';
import Logo from '../../img/bikcraft.svg';

function Header() {
    const location = useLocation();
    const pathname = location.pathname.replace('/', '');
    
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="grid-4">
                    <img src={Logo} alt="Bikcraft" />
                </a>
                <nav className="grid-12 header_menu">
                    <ul>
                        <li className={ pathname === 'sobre' ? 'menu_ativo': '' }><Link to="sobre">Sobre</Link></li>
                        <li className={ pathname === 'produtos'? 'menu_ativo': '' }><Link to="produtos">Produtos</Link></li>
                        <li className={ pathname === 'portifolio'? 'menu_ativo': '' }><Link to="portifolio">Portifólio</Link></li>
                        <li className={ pathname === 'contato'? 'menu_ativo': '' }><Link to="contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;