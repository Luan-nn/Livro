import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 🚀 Mapeamento de traduções completo para a tela 2
const textosTelaDois = {
  'Português': {
    passo: 'Passo 2 de 2',
    titulo: 'Suas metas e Origens',
    sub: 'defina o seu objetivo para ajudar a manter o foco',
    q3: '3. Onde conheceu o site?',
    placeholderSelect: 'Selecione uma opção...',
    opcoesSelect: [
      { val: 'redes-sociais', label: 'Redes Sociais (Instagram/Tik Tok...)' },
      { val: 'amigos', label: 'Indicação de amigos' },
      { val: 'google', label: 'Pesquisa Google' }
    ],
    q4: '4. Qual sua frequência atual de leitura?',
    frequencias: ['Diariamente', 'Algumas Vezes', 'Raramente'],
    btnVoltar: 'Voltar',
    btnSalvar: 'Salvar e criar conta',
    erro: 'Por favor, responda todas as perguntas antes de salvar!'
  },
  'Inglês': {
    passo: 'Step 2 of 2',
    titulo: 'Your goals and Origins',
    sub: 'define your objective to help maintain focus',
    q3: '3. Where did you hear about the website?',
    placeholderSelect: 'Select an option...',
    opcoesSelect: [
      { val: 'redes-sociais', label: 'Social Media (Instagram/TikTok...)' },
      { val: 'amigos', label: 'Friends recommendation' },
      { val: 'google', label: 'Google Search' }
    ],
    q4: '4. What is your current reading frequency?',
    frequencias: ['Daily', 'Sometimes', 'Rarely'],
    btnVoltar: 'Back',
    btnSalvar: 'Save and create account',
    erro: 'Please answer all questions before saving!'
  },
  'Espanhol': {
    passo: 'Paso 2 de 2',
    titulo: 'Tus metas y Orígenes',
    sub: 'define tu objetivo para ayudar a mantener el enfoque',
    q3: '3. ¿Dónde conhecido el sitio web?',
    placeholderSelect: 'Seleccione una opción...',
    opcoesSelect: [
      { val: 'redes-sociais', label: 'Redes Sociales (Instagram/TikTok...)' },
      { val: 'amigos', label: 'Indicación de amigos' },
      { val: 'google', label: 'Búsqueda de Google' }
    ],
    q4: '4. ¿Cuál es tu frecuencia atual de lectura?',
    frequencias: ['Diariamente', 'Algunas Veces', 'Raramente'],
    btnVoltar: 'Volver',
    btnSalvar: 'Guardar y crear cuenta',
    erro: '¡Por favor, responda todas las preguntas antes de guardar!'
  }
};

export default function PersonalizarDois({ idioma }) {
  const navigate = useNavigate();
  
  // Consome os textos dinamicamente baseado na prop global 'idioma'
  const t = textosTelaDois[idioma || 'Português'];

  const [origemSelecionada, setOrigemSelecionada] = useState('');
  const [frequenciaSelecionada, setFrequenciaSelecionada] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origemSelecionada && frequenciaSelecionada) {
      navigate('/cadastro');
    } else {
      alert(t.erro);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-[#F8F9FA]">
      
      {/* Barra de progresso traduzida */}
      <div className="w-full max-w-4xl flex justify-end items-center gap-2 mb-4 text-xs font-semibold text-gray-400">
        <span>{t.passo}</span>
        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-full h-full bg-[#00C853]"></div>
        </div>
      </div>

      <article className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-8">
          <h1 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight">
            {t.titulo}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            {t.sub}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Pergunta 3 */}
          <div className="flex flex-col gap-3 text-left">
            <label htmlFor="origem" className="text-base md:text-lg font-bold text-black">
              {t.q3}
            </label>
            <select 
              id="origem" 
              value={origemSelecionada}
              onChange={(e) => setOrigemSelecionada(e.target.value)}
              className="w-full bg-[#CCCCCC] text-[#111111] font-bold px-5 py-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] appearance-none outline-none cursor-pointer text-base"
              required
            >
              <option value="" disabled>{t.placeholderSelect}</option>
              {t.opcoesSelect.map((opt) => (
                <option key={opt.val} value={opt.val}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Pergunta 4 */}
          <fieldset className="space-y-3">
            <legend className="text-base md:text-lg font-bold text-black text-left">
              {t.q4}
            </legend>
            <div className="flex flex-wrap gap-3">
              {t.frequencias.map((frequencia) => {
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

          {/* Botões de Ação Inferiores Traduzidos */}
          <div className="flex justify-between items-center pt-4 gap-4">
            <button 
              type="button" 
              onClick={() => navigate('/personalizar-1')} 
              className="bg-[#CCCCCC] hover:bg-[#BBBBBB] text-[#111111] font-bold px-8 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-base cursor-pointer"
            >
              {t.btnVoltar}
            </button>
            
            <button 
              type="submit" 
              className="bg-[#00C853] hover:bg-[#00B0FF] text-white font-bold px-8 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-base cursor-pointer"
            >
              {t.btnSalvar}
            </button>
          </div>

        </form>
      </article>
    </main>
  );
}
