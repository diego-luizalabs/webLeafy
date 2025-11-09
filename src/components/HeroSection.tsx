import React from 'react';
// Importa a imagem que você colocou na pasta assets
// Certifique-se de que o caminho está correto
import mockupImage from '../../assets/leafy-mockup.png'


interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

// A primeira coisa que o usuário vê
export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left">
          <span className="text-cor-folha-clara font-semibold uppercase tracking-wider">Projeto Leafy</span>
          <h1 className="text-4xl md:text-6xl font-black text-green-900 mt-3 mb-6">
            A Revolução da Educação Ambiental na Escola
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Conectamos alunos, professores e a natureza através de uma plataforma gamificada, interativa e divertida.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button onClick={() => onNavigate('download')} className="bg-cor-folha-clara text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Baixar o App
            </button>
            <button onClick={() => onNavigate('escolas')} className="bg-gray-200 text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-300 transition-colors">
              Para Escolas
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* Substitua este 'mockupImage' pela sua imagem real em 'src/assets/'.
            Para um placeholder rápido, use:
            <img src="https://placehold.co/400x800/d9f2cc/14532d?text=Leafy+App" alt="Leafy App Mockup" className="rounded-3xl shadow-xl w-full max-w-sm"/>
          */}
          <img src={mockupImage} alt="Ilustração do aplicativo Leafy" className="rounded-3xl shadow-xl w-full max-w-sm md:max-w-md"/>
        </div>
      </div>
    </section>
  );
};