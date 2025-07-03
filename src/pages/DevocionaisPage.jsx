
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const freeDevotionals = [
  { id: 1, title: 'A Provisão em Meio à Crise', excerpt: 'Baseado em 1 Reis 17, vemos como Deus provê para Elias de maneiras inesperadas.', date: 'Hoje' },
  { id: 2, title: 'O Coração Generoso', excerpt: 'Refletindo sobre 2 Coríntios 9:7 e a alegria de dar com um coração grato.', date: 'Ontem' },
  { id: 3, title: 'Contentamento vs. Ambição', excerpt: 'Uma análise de Filipenses 4:11-13 sobre encontrar contentamento em todas as circunstâncias.', date: 'Anteontem' },
];

const DevocionaisPage = () => {
  return (
    <>
      <Helmet>
        <title>Devocionais Diários | Finança com Graça</title>
        <meta name="description" content="Fortaleça sua fé com devocionais diários gratuitos que conectam a Palavra de Deus com sua vida financeira." />
      </Helmet>

      <div className="bg-[var(--cor-fundo-claro)]">
        <header className="pt-32 pb-16 bg-gradient-to-b from-[var(--cor-secundaria)] to-[#9bc1a9] text-white text-center pattern-overlay">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Devocionais Diários</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Um momento diário para conectar sua fé e suas finanças.</p>
          </div>
        </header>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[var(--cor-primaria)] mb-10">Devocionais Gratuitos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {freeDevotionals.map((devotional, index) => (
                <motion.div
                  key={devotional.id}
                  className="bg-white p-6 rounded-lg shadow-md card-hover border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm text-[var(--cor-secundaria)] font-bold">{devotional.date}</span>
                  <h3 className="text-2xl font-bold text-[var(--cor-primaria)] my-2">{devotional.title}</h3>
                  <p className="text-gray-600 mb-4">{devotional.excerpt}</p>
                  <Link to={`/devocionais/${devotional.id}`} className="font-semibold text-[var(--cor-primaria)] hover:underline">
                    Ler completo <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Sparkles className="mx-auto h-12 w-12 text-[var(--cor-secundaria)] mb-4" />
              <h2 className="text-4xl font-bold text-[var(--cor-primaria)] mb-4">Aprofunde sua Jornada</h2>
              <p className="text-lg text-gray-600 mb-8">
                Tenha acesso a séries de devocionais completos, estudos aprofundados e conteúdo exclusivo para membros. Uma nova funcionalidade que chegará em breve para abençoar ainda mais sua vida.
              </p>
              <Button size="lg" className="btn-primary" disabled>
                <Lock className="mr-2 h-5 w-5" /> Em Breve: Área de Membros
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevocionaisPage;
