import logo from '../assets/logo.png'; // Atenção aos dois pontos ".." para sair da pasta pages

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="FlashVolt Logo"
          className="w-24 h-24 object-contain mt-2"
        />
        <h1 className="text-5xl md:text-7xl font-black">
          FlashVolt <span className="text-yellow-400">Company</span>
        </h1>
      </div>

      <p className="mt-8 text-xl text-gray-300 max-w-2xl">
        Serviços elétricos modernos para casas, empresas e projetos técnicos.
      </p>

      <button className="mt-10 px-7 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition-colors">
        Pedir Orçamento
      </button>
    </section>
  );
}
