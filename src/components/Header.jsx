import { Link } from 'react-router-dom';

export default function Header({ t }) { // Recebe o dicionário traduzido do pai App.jsx
  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center">
      <strong className="text-2xl font-bold tracking-tight text-black">
        Ler<span className="text-[#00D37F]">Mais</span>
      </strong>
      
      <nav className="hidden sm:flex gap-8 text-sm font-medium text-gray-400" aria-label="Navegação principal">
        <Link to="/" className="hover:text-black transition-colors">{t.inicio}</Link>
        <Link to="/sobre" className="hover:text-black transition-colors">{t.sobre}</Link>
        <Link to="/como-funciona" className="hover:text-black transition-colors">{t.funcionamento}</Link>
      </nav>
    </header>
  );
}
