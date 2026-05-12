import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-[#0B1020]">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-12 h-12 mt-1" />
        <h1 className="text-2xl font-black text-white">FlashVolt</h1>
      </div>
      <div className="flex gap-6 text-white font-medium">
        <Link title="Início" to="/" className="hover:text-yellow-400">Home</Link>
        <Link title="Serviços" to="/servicos" className="hover:text-yellow-400">Serviços</Link>
        <Link title="Contactos" to="/contactos" className="hover:text-yellow-400">Contactos</Link>
      </div>
    </nav>
  );
}
