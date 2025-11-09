import { BookOpen, Star, Users } from 'lucide-react';

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">Uma plataforma completa</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
            <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BookOpen />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-3">Cursos Interativos</h3>
            <p className="text-gray-600">Módulos completos sobre compostagem, reciclagem, energia solar e muito mais, com linguagem acessível e prática.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Star />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-3">Gamificação e Pontos</h3>
            <p className="text-gray-600">Alunos ganham pontos ao completar módulos e jogar minigames. A competição saudável incentiva o aprendizado contínuo.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-3">Comunidade Escolar</h3>
            <p className="text-gray-600">Um chat seguro e moderado onde turmas podem discutir projetos, compartilhar fotos de suas hortas e tirar dúvidas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};