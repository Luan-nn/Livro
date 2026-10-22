import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Cadastro from './pages/Cadastro.jsx';
import PersonalizarUm from './pages/PersonalizarUm.jsx';
import PersonalizarDois from './pages/PersonalizarDois.jsx';
import Conquistas from './pages/Conquistas.jsx';
import Comunidade from './pages/Comunidade.jsx';
import Progresso from './pages/Progresso.jsx';

// Dicionário global de textos fixos do site (Header e Footer)
const textosGlobais = {
  'Português': { inicio: 'Início', sobre: 'Sobre', funcionamento: 'Como Funciona', selo: 'Plataforma 100% Gratuita e Sem Anúncios', f1: 'Metas Personalizadas', f2: 'Estante Organizada', f3: 'Estatísticas Claras' },
  'Inglês': { inicio: 'Home', sobre: 'About', funcionamento: 'How It Works', selo: '100% Free Platform & Ad-Free', f1: 'Custom Goals', f2: 'Organized Bookshelf', f3: 'Clear Statistics' },
  'Espanhol': { inicio: 'Inicio', sobre: 'Sobre', funcionamento: 'Cómo Funciona', selo: 'Plataforma 100% Gratuita y Sin Anuncios', f1: 'Metas Personalizadas', f2: 'Estante Organizado', f3: 'Estadísticas Claras' }
};

export default function App() {
  // O site começa em Português por padrão
  const [idioma, setIdioma] = useState('Português');
  const t = textosGlobais[idioma];

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F9FA] text-black font-sans flex flex-col justify-between antialiased">
        {/* Passamos os textos traduzidos e o idioma ativo para os componentes */}
        <Header t={t} />

        <Routes>
          <Route path="/" element={<Home idioma={idioma} />} />
          <Route path="/personalizar-1" element={<PersonalizarUm idiomaAtivo={idioma} setIdiomaGlobal={setIdioma} />} />
          <Route path="/personalizar-2" element={<PersonalizarDois idioma={idioma} />} />
          <Route path="/cadastro" element={<Cadastro idioma={idioma} />} />
          <Route path="/conquistas" element={<Conquistas idioma={idioma} />} />
          <Route path="/comunidade" element={<Comunidade idioma={idioma} />} />
          <Route path="/progresso" element={<Progresso idioma={idioma} />} />
          <Route path="/login" element={<main className="flex-1 flex items-center justify-center text-xl font-semibold"><h2>Tela de Login</h2></main>} />
        </Routes>

        <Footer t={t} />
      </div>
    </Router>
  );
}
