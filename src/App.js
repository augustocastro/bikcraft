
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Produtos from './pages/Produtos/Produtos';
import Portifolio from './pages/Portifolio/Portifolio';

function App() {
  return (
    <div>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/produtos" element={<Produtos/>}></Route>
                <Route path="/portifolio" element={<Portifolio/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
