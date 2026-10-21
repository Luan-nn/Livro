import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Progresso() {
  const navigate = useNavigate();

  const estatisticas = [
    { id: 1, label: 'Total de Páginas', valor: '1.250', cor: 'text-[#00B869]' },
    { id: 2, label: 'Dias Seguidos', valor: '13 dias', cor: 'text-[#0275D8]' },
    { id: 3, label: 'Média Diária', valor: '13 páginas', cor: 'text-[#0275D8]' },
  ];

  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-4 flex flex-col">
      
      <div className="w-full flex justify-end mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)} // Volta para a tela anterior na história do navegador
          className="bg-[#CCCCCC] hover:bg-[#BBBBBB] text-[#111111] font-bold px-6 py-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transition-colors cursor-pointer text-sm"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          Voltar
        </button>
      </div>

      <section className="w-full text-center space-y-6" aria-label="Estatísticas de leitura">
        <h1 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight">
          Seu Progresso de Leitura
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-2">
          {estatisticas.map((stat) => (
            <article 
              key={stat.id} 
              className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[140px]"
            >
              <h2 className="text-gray-400 text-lg md:text-xl font-medium mb-2">
                {stat.label}
              </h2>
              <strong className={`font-iosevka text-3xl md:text-4xl font-bold ${stat.cor}`}>
                {stat.valor}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full text-center mt-12 mb-8" aria-label="Atualização de leitura">
        <h2 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
          Última página lida
        </h2>

        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-xl mx-auto flex flex-col gap-2"
        >
          <label htmlFor="pagina" className="sr-only">Digite o número da última página lida</label>
          <input
            type="text"
            id="pagina"
            name="pagina"
            defaultValue="13"
            placeholder="0"
            className="w-full bg-white text-black font-iosevka text-2xl font-bold px-6 py-4 rounded-2xl border-2 border-gray-300 text-left outline-none focus:border-[#00B869] transition-colors"
          />
        </form>
      </section>

    </main>
  );
}
