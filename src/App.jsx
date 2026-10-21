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

const Login = () => <main className="flex-1 flex items-center justify-center text-xl font-semibold"><h2>Tela de Login (Em desenvolvimento por parceiro)</h2></main>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8F9FA] text-black font-sans flex flex-col justify-between antialiased">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalizar-1" element={<PersonalizarUm />} />
          <Route path="/personalizar-2" element={<PersonalizarDois />} />
          <Route path="/cadastro" element={<Cadastro />} />
          
          <Route path="/conquistas" element={<Conquistas />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/progresso" element={<Progresso />} /> 
          
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
