export const ForSchoolsSection = () => {
  return (
    <section id="escolas" className="py-16 md:py-24 bg-verde-claro-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Leve o Leafy para sua Escola</h2>
        <p className="text-lg text-green-800 max-w-3xl mx-auto leading-relaxed mb-8">
          Estamos prontos para transformar sua escola em um polo de sustentabilidade. Oferecemos treinamento para professores, material de apoio pedagógico e integração personalizada da plataforma.
        </p>
        <a href="mailto:parcerias@leafy.com" className="bg-cor-folha-clara text-white font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-opacity">
          Entre em Contato
        </a>
      </div>
    </section>
  );
};