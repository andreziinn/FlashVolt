import { Link } from 'react-router-dom';

export default function Contactos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">
      <h1 className="text-5xl font-black mb-4">
        Fale com a <span className="text-yellow-400">FlashVolt</span>
      </h1>

      <p className="text-gray-400 text-xl mb-12">
        Estamos disponíveis para orçamentos e consultoria técnica.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#151b2d] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-yellow-400 font-bold text-xl mb-2">
            E-mail
          </h2>

          <p className="text-2xl font-medium text-white">
            flashvoltcompany@gmail.com
          </p>
        </div>

        <div className="bg-[#151b2d] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-yellow-400 font-bold text-xl mb-2">
            Telemóvel
          </h2>

          <p className="text-2xl font-medium text-white">
            +351 962 646 265
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/"
          className="text-gray-500 hover:text-yellow-400 transition"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}
