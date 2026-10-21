import { ShieldHalf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
      
      <section className="flex items-center gap-2 font-bold text-black" aria-label="Informações sobre a plataforma">
        <ShieldHalf size={16} strokeWidth={2.5} className="text-black" />
        <span>Plataforma 100% Gratuita e Sem Anúncios</span>
      </section>
      
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 font-medium list-none">
        <li>Metas Personalizadas</li>
        <li>Estante Organizada</li>
        <li>Estatísticas Claras</li>
      </ul>
      
    </footer>
  );
}
