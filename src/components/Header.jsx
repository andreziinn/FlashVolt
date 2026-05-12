import logo from '../assets/logo.png';

export default function Header() {
  const handleRefresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-5 bg-[#0B1020] sticky top-0 z-50 border-b border-white/5">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <a href="/" onClick={handleRefresh} className="flex items-center gap-4 cursor-pointer">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-xl md:text-2xl font-black text-white">FlashVolt</h1>
        </a>
      </div>
      
      {/* Menu que se ajusta: em linha no PC, e com espaçamento correto no telemóvel */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white font-medium text-sm md:text-base">
        <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre Nós</a>
        <a href="#contactos" className="hover:text-yellow-400 font-bold text-yellow-400">Contactos</a>
      </div>
    </nav>
  );
}
