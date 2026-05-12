import logo from '../assets/logo.png';

export default function Header() {
  const handleRefresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-[#0B1020] sticky top-0 z-50 border-b border-white/5">
      {/* Lado Esquerdo: Logo + Nome (Diminuem no telemóvel) */}
      <div className="flex items-center gap-2 md:gap-4">
        <a href="/" onClick={handleRefresh} className="flex items-center gap-2 md:gap-4 cursor-pointer">
          <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          <h1 className="text-lg md:text-2xl font-black text-white leading-none">
            FlashVolt
          </h1>
        </a>
      </div>
      
      {/* Lado Direito: Menu (Texto mais pequeno no telemóvel para não quebrar) */}
      <div className="flex gap-3 md:gap-6 text-white font-medium text-[10px] sm:text-xs md:text-base uppercase tracking-tight md:tracking-normal">
        <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre</a>
        <a href="#contactos" className="text-yellow-400 font-bold">Contactos</a>
      </div>
    </nav>
  );
}
