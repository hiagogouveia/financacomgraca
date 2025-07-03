
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, Search } from 'lucide-react';

const mockPosts = [
  { id: 1, title: '5 Passos Para um Orçamento Familiar Abençoado', category: 'Educação Financeira', date: '01 de Julho, 2025', excerpt: 'Aprenda a organizar as finanças da sua casa com princípios que honram a Deus e trazem paz para sua família...', image: 'https://images.unsplash.com/photo-1554224155-1696413565d3' },
  { id: 2, title: 'O Princípio do Dízimo: Mais Que Uma Obrigação', category: 'Estudos Bíblicos', date: '15 de Junho, 2025', excerpt: 'Uma reflexão profunda sobre o que a Bíblia realmente ensina sobre o dízimo e as ofertas, e como isso impacta nossa fé.', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f' },
  { id: 3, title: 'Investir com Sabedoria: Onde Colocar Seus Recursos?', category: 'Educação Financeira', date: '28 de Maio, 2025', excerpt: 'Descubra estratégias de investimento que estão alinhadas com a ética cristã e o propósito de mordomia.', image: 'https://images.unsplash.com/photo-1642052551949-55173a7346fe' },
  { id: 4, title: 'Devocional: A Parábola dos Talentos e Suas Finanças', category: 'Devocionais', date: '10 de Maio, 2025', excerpt: 'Como a famosa parábola de Jesus pode transformar sua visão sobre como você administra o que Deus lhe confiou.', image: 'https://images.unsplash.com/photo-1621269595556-32454b6d0a76' },
];

const BlogPage = ({ categoryFilter }) => {
  const filteredPosts = categoryFilter ? mockPosts.filter(post => post.category === categoryFilter) : mockPosts;
  const pageTitle = categoryFilter ? categoryFilter : 'Blog';

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Finança com Graça</title>
        <meta name="description" content={`Artigos e reflexões sobre finanças e fé. Descubra conteúdo sobre ${pageTitle.toLowerCase()} na perspectiva cristã.`} />
      </Helmet>

      <div className="bg-white">
        <header className="pt-32 pb-16 bg-[var(--cor-primaria)] text-white text-center pattern-overlay">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">{pageTitle}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Conteúdo para edificar sua vida financeira e espiritual.</p>
          </div>
        </header>

        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-12">
            <div className="flex space-x-2">
              <Link to="/blog" className={`px-4 py-2 rounded-full text-sm font-semibold transition ${!categoryFilter ? 'bg-[var(--cor-secundaria)] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Todos</Link>
              <Link to="/educacao-financeira" className={`px-4 py-2 rounded-full text-sm font-semibold transition ${categoryFilter === 'Educação Financeira' ? 'bg-[var(--cor-secundaria)] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Educação Financeira</Link>
              <Link to="/devocionais" className={`px-4 py-2 rounded-full text-sm font-semibold transition ${categoryFilter === 'Devocionais' ? 'bg-[var(--cor-secundaria)] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>Devocionais</Link>
            </div>
            <div className="relative">
              <input type="text" placeholder="Pesquisar..." className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--cor-secundaria)]" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/post/${post.id}`} className="block">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>{post.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--cor-primaria)] mb-2">{post.title}</h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
