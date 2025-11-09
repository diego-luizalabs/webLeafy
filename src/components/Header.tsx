import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (id: string) => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

// Cabeçalho fixo com navegação e logo
export const Header: React.FC<HeaderProps> = ({ onNavigate, onToggleMenu, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-gray-50/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('hero')}>
          <Leaf className="text-cor-folha-clara" size={28} />
          <span className="text-2xl font-bold text-green-900">Leafy</span>
        </div>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => onNavigate('about')} className="text-gray-600 hover:text-cor-folha-clara font-semibold transition-colors">O Projeto</button>
          <button onClick={() => onNavigate('escolas')} className="text-gray-600 hover:text-cor-folha-clara font-semibold transition-colors">Para Escolas</button>
          <button onClick={() => onNavigate('download')} className="bg-cor-folha-clara text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
            Baixar o App
          </button>
        </nav>
        
        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={onToggleMenu}>
            {isMenuOpen ? <X className="text-gray-800" size={28} /> : <Menu className="text-gray-800" size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};