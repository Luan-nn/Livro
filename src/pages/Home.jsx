import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const traducoesHome = {
  'Português': {
    titulo1: 'Transforme sua leitura',
    titulo2: 'hábito diário',
    titulo3: 'sem complicações.',
    sub: 'Inspirado na facilidade do Kindle e na comunidade do Skoob. Defina metas simples,',
    btn1: 'Começar minha jornada',
    btn2: 'Já tenho uma conta'
  },
  'Inglês': {
    titulo1: 'Transform your reading',
    titulo2: 'daily habit',
    titulo3: 'without complications.',
    sub: 'Inspired by the ease of Kindle and the Skoob community. Set simple goals,',
    btn1: 'Start my journey',
    btn2: 'I already have an account'
  },
  'Espanhol': {
    titulo1: 'Transforma tu lectura',
    titulo2: 'hábito diario',
    titulo3: 'sin complicaciones.',
    sub: 'Inspirado na facilidad del Kindle y en la comunidad de Skoob. Define metas simples,',
    btn1: 'Comenzar mi viaje',
    btn2: 'Ya tengo una cuenta'
  }
};

export default function Home({ idioma }) {
  const navigate = useNavigate();
  const t = traducoesHome[idioma || 'Português'];

  return (
    <main className="flex-1 flex flex-col items-start justify-center text-left px-6 max-w-5xl w-full mx-auto">
      <h1 className="font-iosevka text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.1] max-w-4xl">
        {t.titulo1} <br />
        em um <span className="text-[#00E676] font-extrabold italic">{t.titulo2}</span> <br />
        {t.titulo3}
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-black font-semibold max-w-2xl leading-relaxed">
        {t.sub}
      </p>

      <section className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" aria-label="Ações">
        <button 
          onClick={() => navigate('/personalizar-1')}
          className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00B0FF] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-pointer"
        >
          <span className="text-xl">{t.btn1}</span>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={() => navigate('/login')}
          className="w-full sm:w-auto bg-[#CCCCCC] hover:bg-[#BBBBBB] text-[#111111] font-bold px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
        >
          {t.btn2}
        </button>
      </section>
    </main>
  );
}
