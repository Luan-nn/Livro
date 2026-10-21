import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalizarDois() {
  const navigate = useNavigate();

  // Estados para as perguntas da tela 2
  const [origemSelecionada, setOrigemSelecionada] = useState('');
  const [frequenciaSelecionada, setFrequenciaSelecionada] = useState(null);

  const frequencias = ['Diariamente', 'Algumas Vezes', 'Raramente'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origemSelecionada && frequenciaSelecionada) {
      navigate('/cadastro');
    } else {
      alert('Por favor, responda todas as perguntas antes de salvar!');
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-[#F8F9FA]">
      <div className="w-full max-w-4xl flex justify-end items-center gap-2 mb-4 text-xs font-semibold text-gray-400">
        <span>Passo 2 de 2</span>
        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-full h-full bg-[#00C853]"></div>
        </div>
      </div>

      <article className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-8">
          <h1 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight">
            Suas metas e Origens
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            defina o seu objetivo para ajudar a manter o foco
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Pergunta 3 - Caixa de Opção Semântica */}
          <div className="flex flex-col gap-3">
            <label htmlFor="origem" className="text-base md:text-lg font-bold text-black">3. Onde conheceu o site?</label>
            <select 
              id="origem" 
              value={origemSelecionada}
              onChange={(e) => setOrigemSelecionada(e.target.value)}
              className="w-full bg-[#CCCCCC] text-[#111111] font-bold px-5 py-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] appearance-none outline-none cursor-pointer"
              required
            >
              {/* Opção vazia inicial para forçar a escolha do usuário */}
              <option value="" disabled>Selecione uma opção...</option>
              <option value="redes-sociais">Redes Sociais (Instagram/Tik Tok...)</option>
              <option value="amigos">Indicação de amigos</option>
              <option value="google">Pesquisa Google</option>
            </select>
          </div>

          {/* Pergunta 4 */}
          <fieldset className="space-y-3">
            <legend className="text-base md:text-lg font-bold text-black">4. Qual sua frequência atual de leitura?</legend>
            <div className="flex flex-wrap gap-3">
              {frequencias.map((frequencia) => {
                const isSelected = frequenciaSelecionada === frequencia;
                return (
                  <button
                    key={frequencia}
                    type="button"
                    onClick={() => setFrequenciaSelecionada(frequencia)}
                    className={`font-bold px-5 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
                      isSelected ? 'bg-[#00C853] text-white' : 'bg-[#CCCCCC] text-[#111111]'
                    }`}
                  >
                    {frequencia}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="flex justify-between items-center pt-4 gap-4">
            <button 
              type="button" 
              onClick={() => navigate('/personalizar-1')} 
              className="bg-[#CCCCCC] hover:bg-[#BBBBBB] text-[#111111] font-bold px-8 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-base cursor-pointer"
            >
              Voltar
            </button>
            
            <button 
              type="submit" 
              className="bg-[#00C853] hover:bg-[#00B0FF] text-white font-bold px-8 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-base cursor-pointer"
            >
              Salvar e criar conta
            </button>
          </div>

        </form>
      </article>
      <small className="mt-4 text-xs text-gray-400 font-medium">Etapa de preferências para configuração inicial</small>
    </main>
  );
}
