import logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0B1020]">
      {/* 1. HERO */}
<section 
  id="home" 
  className="relative w-full min-h-[85vh] flex items-center bg-cover bg-fixed bg-center"
  style={{ 
    backgroundImage: `linear-gradient(to right, rgba(11, 16, 32, 0.9) 30%, rgba(11, 16, 32, 0.4)), url('https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2070&auto=format&fit=crop')` 
  }}
>
  <div className="max-w-7xl mx-auto px-6 w-full z-10">
    <div className="flex items-center gap-4">
      <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
      <h1 className="text-5xl md:text-7xl font-black italic text-white drop-shadow-lg">
        FlashVolt <span className="text-yellow-400">Company</span>
      </h1>
    </div>
    
    <p className="mt-8 text-xl text-white max-w-2xl font-medium leading-relaxed drop-shadow-md">
      Serviços elétricos modernos para casas, empresas e projetos técnicos. 
      Especialistas em segurança, manutenção e eficiência energética.
    </p>

    <div className="flex gap-4 mt-10">
      <a href="#contactos" className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition-transform shadow-xl shadow-yellow-400/20">
        Pedir Orçamento
      </a>
      <a href="#servicos" className="px-8 py-4 rounded-2xl border border-white/40 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
        Ver Serviços
      </a>
    </div>
  </div>
</section>
      {/* 2. SERVIÇOS */}
      <section id="servicos" className="max-w-7xl mx-auto px-6 py-24 w-full border-t border-gray-800">
        <h2 className="text-4xl font-black text-yellow-400 mb-12 italic uppercase">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#151b2d] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-white text-2xl font-bold mb-4">Residencial</h3>
            <p className="text-gray-400">Instalações completas, manutenção de quadros e iluminação inteligente.</p>
          </div>
          <div className="bg-[#151b2d] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-white text-2xl font-bold mb-4">Industrial</h3>
            <p className="text-gray-400">Manutenção preventiva e corretiva para fábricas e grandes potências.</p>
          </div>
          <div className="bg-[#151b2d] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-white text-2xl font-bold mb-4">Certificação</h3>
            <p className="text-gray-400">Vistorias técnicas e emissão de certificados de segurança e eficiência elétrica.</p>
          </div>
        </div>
      </section>

      {/* 3. SOBRE NÓS */}
      <section id="sobre" className="max-w-7xl mx-auto px-6 py-24 w-full border-t border-gray-800">
        <h2 className="text-4xl font-black text-yellow-400 mb-8 italic uppercase">Sobre Nós</h2>
        <div className="max-w-4xl">
          <p className="text-2xl text-white leading-relaxed font-light">
            A <span className="text-yellow-400 font-bold">FlashVolt</span> nasceu da necessidade de um serviço elétrico rápido e tecnológico. Combinamos anos de experiência, juventude e modernismo com as melhores práticas de segurança para iluminar o seu projeto.
          </p>
        </div>
      </section>

      {/* 4. CONTACTOS */}
      <section id="contactos" className="w-full bg-yellow-400 py-24 text-black mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black italic mb-6">CONTACTOS</h2>
          <p className="text-2xl mb-12 font-bold">Solicite o seu orçamento gratuito agora mesmo.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-sm uppercase font-black opacity-60">Ligue-nos</span>
              <a href="tel:+351962646265" className="text-3xl font-black hover:underline">+351 962 646 265</a>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm uppercase font-black opacity-60">Email</span>
              <a href="mailto:flashvoltcompany@gmail.com" className="text-3xl font-black hover:underline small">flashvoltcompany@gmail.com</a>
            </div>
          </div>
          
          <div className="mt-16">
            <a href="https://wa.me/351962646265" target="_blank" rel="noreferrer" className="bg-black text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-900 transition">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
