import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="flex-1 flex flex-col items-start justify-center text-left px-6 max-w-5xl w-full mx-auto">
      
      <h1 className="font-iosevka text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.1] max-w-4xl">
        Transforme sua leitura <br />
        em um <span className="text-[#00E676] font-extrabold italic">hábito diário</span> <br />
        sem complicações.
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-black font-semibold max-w-2xl leading-relaxed">
        Inspirado na facilidade do Kindle e na comunidade do Skoob. Defina metas simples,
      </p>

      <section className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto" aria-label="Ações principais">
        <button 
          onClick={() => navigate('/personalizar-1')}       className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00B0FF] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all group"
        >
          <span className="text-xl">Começar minha jornada</span>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={() => navigate('/login')}
          className="w-full sm:w-auto bg-[#CCCCCC] hover:bg-[#BBBBBB] text-[#111111] font-bold px-8 py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors"
        >
          Já tenho uma conta
        </button>
      </section>

    </main>
  );
}
