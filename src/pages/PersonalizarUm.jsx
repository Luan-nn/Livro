import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Textos desta tela específicos para cada idioma
const textosTela = {
  'Português': { titulo: 'Vamos personalizar sua leitura', sub: 'Responda para recomendarmos metas e livros do seu interesse.', q1: '1. Qual gênero literário você prefere?', placeholderOutro: 'Especifique o outro gênero...', q2: '2. Qual idioma você prefere para ler?', btn: 'Próximo passo', erro: 'Por favor, selecione as opções necessárias.' },
  'Inglês': { titulo: 'Let’s personalize your reading', sub: 'Answer to let us recommend goals and books of your interest.', q1: '1. Which literary genre do you prefer?', placeholderOutro: 'Specify the other genre...', q2: '2. Which language do you prefer to read in?', btn: 'Next step', erro: 'Please select the required options.' },
  'Espanhol': { titulo: 'Vamos a personalizar tu lectura', sub: 'Responde para recomendarte metas y libros de tu interés.', q1: '1. ¿Qué género literario prefieres?', placeholderOutro: 'Especifica el otro género...', q2: '2. ¿Qué idioma prefieres para leer?', btn: 'Siguiente paso', erro: 'Por favor, selecciona las opciones requeridas.' }
};

export default function PersonalizarUm({ idiomaAtivo, setIdiomaGlobal }) {
  const navigate = useNavigate();
  const t = textosTela[idiomaAtivo];

  const [generosSelecionados, setGenerosSelecionados] = useState([]);
  const [generoCustomizado, setGeneroCustomizado] = useState('');

  const generos = ['Fantasia', 'Romance', 'Terror', 'Outro...'];
  const idiomas = ['Português', 'Inglês', 'Espanhol'];

  const handleGeneroClick = (genero) => {
    if (generosSelecionados.includes(genero)) {
      setGenerosSelecionados(generosSelecionados.filter((item) => item !== genero));
    } else {
      setGenerosSelecionados([...generosSelecionados, genero]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const temGenero = generosSelecionados.length > 0;
    const outroPreenchido = !generosSelecionados.includes('Outro...') || generoCustomizado.trim() !== '';

    if (temGenero && outroPreenchido) {
      navigate('/personalizar-2');
    } else {
      alert(t.erro);
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-[#F8F9FA]">
      <div className="w-full max-w-4xl flex justify-end items-center gap-2 mb-4 text-xs font-semibold text-gray-400">
        <span>{idiomaAtivo === 'Inglês' ? 'Step 1 of 2' : 'Passo 1 de 2'}</span>
      </div>

      <article className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-8">
          <h1 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight">{t.titulo}</h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">{t.sub}</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Pergunta 1 */}
          <fieldset className="space-y-3">
            <legend className="text-base md:text-lg font-bold text-black">{t.q1}</legend>
            <div className="flex flex-wrap gap-3">
              {generos.map((genero) => {
                const isSelected = generosSelecionados.includes(genero);
                return (
                  <button
                    key={genero}
                    type="button"
                    onClick={() => handleGeneroClick(genero)}
                    className={`font-bold px-5 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${isSelected ? 'bg-[#00C853] text-white' : 'bg-[#CCCCCC] text-[#111111]'}`}
                  >
                    {genero}
                  </button>
                );
              })}
            </div>

            {/* 🚀 O INPUT DO OUTRO APARECE AQUI SE FOR SELECIONADO SEMÂNTICAMENTE */}
            {generosSelecionados.includes('Outro...') && (
              <div className="pt-2 max-w-md flex flex-col gap-2">
                <label htmlFor="custom-genre" className="sr-only">{t.placeholderOutro}</label>
                <input
                  type="text"
                  id="custom-genre"
                  value={generoCustomizado}
                  onChange={(e) => setGeneroCustomizado(e.target.value)}
                  placeholder={t.placeholderOutro}
                  required
                  className="w-full bg-[#F1F3F5] text-black px-5 py-2.5 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] outline-none focus:bg-white text-sm font-semibold transition-all"
                />
              </div>
            )}
          </fieldset>

          
          <fieldset className="space-y-3">
            <legend className="text-base md:text-lg font-bold text-black">{t.q2}</legend>
            <div className="flex flex-wrap gap-3">
              {idiomas.map((idioma) => {
                const isSelected = idiomaAtivo === idioma;
                return (
                  <button
                    key={idioma}
                    type="button"
                    onClick={() => setIdiomaGlobal(idioma)} // Alteração global imediata!
                    className={`font-bold px-5 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${isSelected ? 'bg-[#00C853] text-white' : 'bg-[#CCCCCC] text-[#111111]'}`}
                  >
                    {idioma}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="flex justify-end pt-4">
            <button type="submit" className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00B0FF] text-white font-bold px-10 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-base cursor-pointer">
              {t.btn}
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

