import { useNavigate, Link } from 'react-router-dom';

export default function Cadastro() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // No futuro, a lógica de envio para o banco de dados entrará aqui.
    console.log('Formulário enviado!');
  };

  return (
   
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-[#F8F9FA]">
      
      
      <article className="w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center">
        
        
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Crie sua Conta
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-medium mt-2">
            Salve seu progresso e sincronize sua estante
          </p>
        </header>

        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          
          
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-lg font-bold text-black text-left">
              Nome completo:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Digite seu nome completo"
              className="w-full bg-[#F1F3F5] text-black px-5 py-3 rounded-full text-base border border-transparent focus:border-[#00B869] focus:bg-white outline-none transition-all font-medium"
            />
          </div>

          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-bold text-black text-left">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="seu@email.com"
              className="w-full bg-[#F1F3F5] text-black px-5 py-3 rounded-full text-base border border-transparent focus:border-[#00B869] focus:bg-white outline-none transition-all font-medium"
            />
          </div>

          
          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-lg font-bold text-black text-left">
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              required
              placeholder="Crie uma senha segura"
              className="w-full bg-[#F1F3F5] text-black px-5 py-3 rounded-full text-base border border-transparent focus:border-[#00B869] focus:bg-white outline-none transition-all font-medium"
            />
          </div>

        
          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#00B869] hover:bg-[#00A05B] text-white font-bold px-12 py-3.5 rounded-xl text-lg shadow-sm transition-colors cursor-pointer"
            >
              Concluir
            </button>
          </div>

        </form>

        {/* Link para alternar para a tela de Login */}
        <footer className="mt-8 text-sm text-gray-400 font-medium">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-[#0275D8] hover:underline font-semibold">
            Entrar
          </Link>
        </footer>

      </article>
      
    </main>
  );
}
