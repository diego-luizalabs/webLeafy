import React from 'react';

interface MobileMenuProps {
  onNavigate: (id: string) => void;
  onClose: () => void;
}

// Menu que aparece ao clicar no ícone de menu no celular
export const MobileMenu: React.FC<MobileMenuProps> = ({ onNavigate, onClose }) => {
  // Envolve a navegação no onClose para fechar o menu após o clique
  const handleNavigate = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed top-20 left-0 right-0 bottom-0 bg-gray-50 z-40 p-6 md:hidden">
      <nav className="flex flex-col gap-6">
        <button onClick={() => handleNavigate('about')} className="text-gray-700 text-lg font-semibold text-left py-2">O Projeto</button>
        <button onClick={() => handleNavigate('escolas')} className="text-gray-700 text-lg font-semibold text-left py-2">Para Escolas</button>
        <button onClick={() => handleNavigate('download')} className="bg-cor-folha-clara text-white font-semibold px-6 py-3 rounded-full text-lg">
          Baixar o App
        </button>
      </nav>
    </div>
  );
};