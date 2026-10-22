import { Link } from 'react-router-dom';

const traducoesCadastro = {
  'Português': { titulo: 'Crie sua Conta', sub: 'Salve seu progresso e sincronize sua estante', campo1: 'Nome completo:', p1: 'Digite seu nome completo', campo2: 'Email:', p2: 'seu@email.com', campo3: 'Senha:', p3: 'Crie uma senha segura', btn: 'Concluir', link: 'Já tem uma conta? ', entrar: 'Entrar' },
  'Inglês': { titulo: 'Create your Account', sub: 'Save your progress and sync your bookshelf', campo1: 'Full name:', p1: 'Enter your full name', campo2: 'Email:', p2: 'your@email.com', campo3: 'Password:', p3: 'Create a secure password', btn: 'Complete', link: 'Already have an account? ', entrar: 'Sign In' },
  'Espanhol': { titulo: 'Crea tu Cuenta', sub: 'Guarda tu progreso y sincroniza tu estante', campo1: 'Nombre completo:', p1: 'Escribe tu nombre completo', campo2: 'Email:', p2: 'tu@email.com', campo3: 'Contraseña:', p3: 'Crea una contraseña segura', btn: 'Concluir', link: '¿Ya tienes una cuenta? ', entrar: 'Entrar' }
};

export default function Cadastro({ idioma }) {
  const t = traducoesCadastro[idioma || 'Português'];

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-[#F8F9FA]">
      <article className="w-full max-w-2xl bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col items-center">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight">{t.titulo}</h1>
          <p className="text-gray-400 text-base md:text-lg font-medium mt-2">{t.sub}</p>
        </header>

        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-lg font-bold text-black text-left">{t.campo1}</label>
            <input type="text" id="nome" required placeholder={t.p1} className="w-full bg-[#F1F3F5] text-black px-5 py-3 rounded-full border border-transparent focus:border-[#00B869] focus:bg-white outline-none transition-all font-medium" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-bold text-black text-left">{t.campo2}</label>
            <input type="email" id="email" required placeholder={t.p2} className="w-full bg-[#F1F3F5] text-black px-5 py-3 rounded-full border border-transparent focus:border-[#00B869] focus:bg-white outline-none transition-all font-medium" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-lg font-bold text-black text-left">{t.campo3}</label>
            <input type="password" id="senha" required placeholder={t.p3} className="w-full bg-[#F1F3F5] text-black px-5 py-3 rounded-full border border-transparent focus:border-[#00B869] focus:bg-white outline-none transition-all font-medium" />
          </div>

          <div className="pt-4 flex justify-center">
            <button type="submit" className="w-full sm:w-auto bg-[#00B869] hover:bg-[#00A05B] text-white font-bold px-12 py-3.5 rounded-xl text-lg shadow-sm transition-colors cursor-pointer">
              {t.btn}
            </button>
          </div>
        </form>

        <footer className="mt-8 text-sm text-gray-400 font-medium">
          {t.link}
          <Link to="/login" className="text-[#0275D8] hover:underline font-semibold">{t.entrar}</Link>
        </footer>
      </article>
    </main>
  );
}
