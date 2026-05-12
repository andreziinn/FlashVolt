import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contactos from './pages/Contactos';

export default function App() {
  return (
    <Router>
      {/* O fundo escuro fica aqui para ser aplicado em TODO o site */}
      <div className="min-h-screen bg-[#0B1020] text-white font-sans">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
      </div>
    </Router>
  );
}
