import React from 'react';

// Seção "Sobre o Projeto"
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">O que é o Leafy?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          O Leafy é um ecossistema completo pensado para escolas. Usamos a tecnologia que os alunos já amam — jogos, chat e pontos — para ensinar tópicos vitais como reciclagem, hortas urbanas, energias renováveis e consumo consciente. Transformamos o pátio da escola em uma extensão da sala de aula.
        </p>
      </div>
    </section>
  );
};