import logo from '../assets/logo.png';

export default function Header() {
  // Função que força o refresh da página
  const handleRefresh = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de apenas seguir o link
    window.location.reload();
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-[#0B1020] sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Adicionamos o onClick aqui no link do logo */}
        <a href="/" onClick={handleRefresh} className="flex items-center gap-4 cursor-pointer">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-black text-white">FlashVolt</h1>
        </a>
      </div>
      
      <div className="flex gap-6 text-white font-medium">
        <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#servicos" className="hover:text-yellow-400 transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre Nós</a>
        <a href="#contactos" className="hover:text-yellow-400 font-bold text-yellow-400">Contactos</a>
      </div>
    </nav>
  );
}
