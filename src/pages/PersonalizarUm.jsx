import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalizarUm() {
  const navigate = useNavigate();

  
  const [generosSelecionados, setGenerosSelecionados] = useState([]);
  const [idiomaSelecionado, setIdiomaSelecionado] = useState(null);

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
    
    
    if (generosSelecionados.length > 0 && idiomaSelecionado) {
      navigate('/personalizar-2');
    } else {
      alert('Por favor, selecione pelo menos um gênero e uma opção de idioma antes de continuar!');
    }
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-[#F8F9FA]">
      <div className="w-full max-w-4xl flex justify-end items-center gap-2 mb-4 text-xs font-semibold text-gray-400">
        <span>Passo 1 de 2</span>
        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-[#00C853]"></div>
        </div>
      </div>

      <article className="w-full max-w-4xl bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <header className="mb-8">
          <h1 className="font-iosevka text-3xl md:text-4xl font-bold text-black tracking-tight">
            Vamos personalizar sua leitura
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            Responda para recomendarmos metas e livros do seu interesse.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          
          <fieldset className="space-y-3">
            <legend className="text-base md:text-lg font-bold text-black">1. Qual gênero literário você prefere?</legend>
            <div className="flex flex-wrap gap-3">
              {generos.map((genero) => {
                
                const isSelected = generosSelecionados.includes(genero);
                return (
                  <button
                    key={genero}
                    type="button"
                    onClick={() => handleGeneroClick(genero)}
                    className={`font-bold px-5 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
                      isSelected ? 'bg-[#00C853] text-white' : 'bg-[#CCCCCC] text-[#111111]'
                    }`}
                  >
                    {genero}
                  </button>
                );
              })}
            </div>
          </fieldset>

          
          <fieldset className="space-y-3">
            <legend className="text-base md:text-lg font-bold text-black">2. Qual idioma você prefere para ler?</legend>
            <div className="flex flex-wrap gap-3">
              {idiomas.map((idioma) => {
                const isSelected = idiomaSelecionado === idioma;
                return (
                  <button
                    key={idioma}
                    type="button"
                    onClick={() => setIdiomaSelecionado(idioma)}
                    className={`font-bold px-5 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
                      isSelected ? 'bg-[#00C853] text-white' : 'bg-[#CCCCCC] text-[#111111]'
                    }`}
                  >
                    {idioma}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="flex justify-end pt-4">
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00B0FF] text-white font-bold px-10 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors text-base cursor-pointer"
            >
              Proximo passo
            </button>
          </div>

        </form>
      </article>
      <small className="mt-4 text-xs text-gray-400 font-medium">Etapa de preferências para configuração inicial</small>
    </main>
  );
}

