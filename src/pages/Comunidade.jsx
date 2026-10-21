import { Heart, FileText } from 'lucide-react';

export default function Comunidade() {
  // Substituímos os links da internet pelas referências exatas dos seus arquivos!
  const posts = [
    {
      id: 1,
      autor: 'Francisco Júnior',
      foto: '/src/assets/image_2OpTn6.png', // 👈 Foto de Perfil do Francisco
      acao: 'concluiu a leitura de "O Crime do Padre Amaro"',
      capa: '/src/assets/image_HAwQ0c.png', // 👈 Capa do livro dele
      resenha: 'O Crime do Padre Amaro é um clássico do Realismo que não envelhece. Eça de Queirós entrega uma crítica feroz e cirúrgica à sociedade e à Igreja do século XIX. Através da história do Padre Amaro e de Amélia, o livro escancara a falsa moralidade, a covardia e o peso das aparências em uma cidade pequena. Narrativa envolvente, personagens falhos e uma leitura que provoca indignação do início ao fim. Indispensável!',
      curtidas: 23
    },
    {
      id: 2,
      autor: 'Lianna Rodrigues',
      foto: '/src/assets/image_n78bX4.png', // 👈 Foto de Perfil da Lianna
      acao: 'concluiu a leitura de "Call Me by Your Name"',
      capa: '/src/assets/image_X_b2do.png', // 👈 Capa do livro dela
      resenha: 'Call Me by Your Name é puro sentimento. André Aciman traduz com perfeição aquele caos de ter 17 anos: o desejo sufocante, a obsesão, o medo da rejeição e a confusão de se apaixonar por alguém que parece inalcançável. Tudo isso com o cenário impecável do verão italiano nos anos 80 - sol, piano, livros e uma tensão absurda. O monólogo do pai no final te destrói por completo. Uma obra-prima melancólica que dói de tão linda. Li de uma vez e chorei horrores.',
      curtidas: 62
    }
  ];

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-8 relative">
      
      <header className="mb-8 text-left">
        <h1 className="font-iosevka text-3xl font-bold text-[#1A2E5A]">Feed de Leitura</h1>
        <p className="text-gray-400 font-medium text-sm md:text-base mt-1">
          descubra o que sua comunidade está lendo agora - 2 novas resenhas
        </p>
      </header>

      <section className="space-y-6" aria-label="Feed de publicações">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 relative items-start">
            
            <div className="flex items-center md:items-start gap-4 min-w-[200px]">
              <img src={post.foto} alt={`Foto de perfil de ${post.autor}`} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
              <div className="text-left">
                <h2 className="font-iosevka text-xl font-bold text-black leading-tight">{post.autor}</h2>
                <p className="text-xs font-medium text-gray-400 mt-1">{post.acao}</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col sm:flex-row gap-4 items-start w-full">
              <img src={post.capa} alt={`Capa do livro associada à resenha de ${post.autor}`} className="w-28 h-40 object-cover rounded-xl shadow-sm border border-gray-100 flex-shrink-0" />
              <div className="text-left flex-1">
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                  {post.resenha}
                </p>
                
                <footer className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs md:text-sm text-gray-400 font-medium w-full">
                  <span>( ★ ★ ★ ★ ★ )</span>
                  <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors font-semibold text-black cursor-pointer">
                    <Heart size={16} />
                    <span>{post.curtidas} Curtidas</span>
                  </button>
                </footer>
              </div>
            </div>

          </article>
        ))}
      </section>

      <button 
        aria-label="Escrever nova resenha" 
        className="fixed bottom-8 right-8 md:right-12 bg-[#2D7CF6] hover:bg-[#1A62D6] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
      >
        <FileText size={24} />
      </button>

    </main>
  );
}
