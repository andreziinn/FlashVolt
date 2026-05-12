export default function Contactos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 text-white">
      <h1 className="text-5xl font-black mb-10">
        Nossos <span className="text-yellow-400">Contactos</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">E-mail</h2>
          <p className="text-xl">flashvoltcompany@gmail.com</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Telemóvel</h2>
          <p className="text-xl">+351 962646265</p>
        </div>
      </div>
    </section>
  );
}
