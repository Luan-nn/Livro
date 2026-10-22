import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const traducoesProgresso = {
  'Português': { btnVoltar: 'Voltar', titulo: 'Seu Progresso de Leitura', c1: 'Total de Páginas', c2: 'Dias Seguidos', c3: 'Média Diária', un2: 'dias', un3: 'páginas', titulo2: 'Última página lida' },
  'Inglês': { btnVoltar: 'Back', titulo: 'Your Reading Progress', c1: 'Total Pages', c2: 'Consecutive Days', c3: 'Daily Average', un2: 'days', un3: 'pages', titulo2: 'Last page read' },
  'Espanhol': { btnVoltar: 'Volver', titulo: 'Tu Progreso de Lectura', c1: 'Total de Páginas', c2: 'Días Seguidos', c3: 'Promedio Diario', un2: 'días', un3: 'páginas', titulo2: 'Última página leída' }
};

export default function Progresso({ idioma }) {
  const navigate = useNavigate();
  const t = traducoesProgresso[idioma || 'Português'];

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-4 flex flex-col">
      <div className="w-full flex justify-end mb-6">
        <button type="button" onClick={() => navigate(-1)} className="bg-[#CCCCCC] hover:bg-[#BBBBBB] text-[#111111] font-bold px-6 py-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transition-colors cursor-pointer text-sm">
          <ArrowLeft size={16} strokeWidth={2.5} /> {t.btnVoltar}
        </button>
      </div>

      <section className="w-full text-center space-y-6" aria-label="Estatísticas">
        <h1 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight">{t.titulo}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-2">
          <article className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[140px]">
            <h2 className="text-gray-400 text-lg md:text-xl font-medium mb-2">{t.c1}</h2>
            <strong className="font-iosevka text-3xl md:text-4xl font-bold text-[#00B869]">1.250</strong>
          </article>
          <article className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[140px]">
            <h2 className="text-gray-400 text-lg md:text-xl font-medium mb-2">{t.c2}</h2>
            <strong className="font-iosevka text-3xl md:text-4xl font-bold text-[#0275D8]">13 {t.un2}</strong>
          </article>
          <article className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[140px]">
            <h2 className="text-gray-400 text-lg md:text-xl font-medium mb-2">{t.c3}</h2>
            <strong className="font-iosevka text-3xl md:text-4xl font-bold text-[#0275D8]">13 {t.un3}</strong>
          </article>
        </div>
      </section>

      <section className="w-full text-center mt-12 mb-8">
        <h2 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">{t.titulo2}</h2>
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-xl mx-auto flex flex-col gap-2">
          <input type="text" id="pagina" defaultValue="13" className="w-full bg-white text-black font-iosevka text-2xl font-bold px-6 py-4 rounded-2xl border-2 border-gray-300 text-left outline-none focus:border-[#00B869] transition-colors" />
        </form>
      </section>
    </main>
  );
}
