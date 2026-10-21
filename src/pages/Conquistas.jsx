import { Award, BookOpen, Moon, Zap, Search, Compass, MessageSquare, HelpCircle } from 'lucide-react';

export default function Conquistas() {
  const medalhas = [
    { id: 1, titulo: 'Leitor Diário', desc: 'Leia todos os dias', icone: <Award className="text-yellow-500" size={28} />, ativa: true },
    { id: 2, titulo: 'Devorador de Livros', desc: '14 livros lidos', icone: <BookOpen className="text-green-600" size={28} />, ativa: true },
    { id: 3, titulo: 'Coruja Noturna', desc: 'Leia de noite', icone: <Moon className="text-purple-600" size={28} />, ativa: true },
    { id: 4, titulo: 'Maratonista', desc: 'Leia 100 páginas', icone: <Zap className="text-orange-500" size={28} />, ativa: true },
    { id: 5, titulo: 'Detetive', desc: 'Leia 1 livro de suspense', icone: <Search className="text-blue-500" size={28} />, ativa: true },
    { id: 6, titulo: 'Eclético', desc: 'Leia dois livros opostos', icone: <Compass className="text-indigo-500" size={28} />, ativa: true },
    { id: 7, titulo: 'Crítico Literário', desc: 'Escreva sua primeira resenha', icone: <MessageSquare className="text-cyan-600" size={28} />, ativa: true },
    { id: 8, titulo: 'A Ser Descoberto...', desc: '', icone: <HelpCircle className="text-gray-300" size={28} />, ativa: false },
  ];

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
      <h1 className="font-iosevka text-3xl font-bold text-[#1A2E5A] mb-8 text-left">
        Suas Medalhas de Leitura
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0">
        {medalhas.map((medalha) => (
          <li 
            key={medalha.id}
            className={`border-2 border-gray-100 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm min-h-[140px] transition-all bg-white ${
              medalha.ativa ? 'hover:shadow-md' : 'opacity-60 bg-gray-50 border-dashed'
            }`}
          >
            <div className="mb-3">{medalha.icone}</div>
            <strong className="font-iosevka text-xl font-bold text-[#1A2E5A]">
              {medalha.titulo}
            </strong>
            {medalha.desc && (
              <p className="text-sm font-medium text-gray-400 mt-1">
                {medalha.desc}
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
