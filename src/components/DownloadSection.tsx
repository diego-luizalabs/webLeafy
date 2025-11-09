
import React from 'react';
import { Apple } from 'lucide-react';

// Ícone do Google Play (SVG embutido)
const GooglePlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21.32 10.1a.98.98 0 0 0-.23-1.28L4.2 1.25a1 1 0 0 0-1.4.9v19.7a1 1 0 0 0 1.4.9l16.89-7.57a.99.99 0 0 0 .23-.3zM6.5 17.5v-11l8.6 5.5-8.6 5.5z" />
    <path d="M21.32 10.1a.98.98 0 0 0-.23-1.28L4.2 1.25a1 1 0 0 0-1.4.9v19.7a1 1 0 0 0 1.4.9l16.89-7.57a.99.99 0 0 0 .23-.3zM6.5 17.5v-11l8.6 5.5-8.6 5.5z" opacity="0.5"/>
    <path d="M21.5 11.1L6.9 3.5a.99.99 0 0 0-.9-.1c-.5.2-.9 1-.9 1.6v14c0 .6.4 1.4.9 1.6.3.1.6 0 .9-.1l14.6-7.6c.5-.3.5-1 0-1.3zM6.5 6.5l8.6 5.5-8.6 5.5v-11z" />
  </svg>
);

// Seção final com os links para as lojas
export const DownloadSection = () => {
  return (
    <section id="download" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Comece a mudança agora</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          O app é gratuito para alunos e professores de escolas parceiras. Baixe, entre com o código da sua escola e comece a aprender!
        </p>
        {/* Botões das Lojas */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
          {/* Botão App Store (Link de placeholder) */}
          <a href="https://appstore.com/leafy" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
            <Apple className="w-6 h-6" />
            <div>
              <p className="text-xs text-left">Baixar na</p>
              <p className="text-xl -mt-1 font-semibold">App Store</p>
            </div>
          </a>
          {/* Botão Google Play (Link de placeholder) */}
          <a href="https://play.google.com/store/apps/details?id=com.leafy" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
            <GooglePlayIcon />
            <div>
              <p className="text-xs text-left">Disponível no</p>
              <p className="text-xl -mt-1 font-semibold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};