
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GenericPage = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Finança com Graça</title>
        <meta name="description" content={`Página sobre ${title}. Conteúdo em desenvolvimento na plataforma Finança com Graça.`} />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] pt-24 bg-[var(--cor-fundo-claro)]">
        <motion.div 
          className="text-center p-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Wrench className="mx-auto h-16 w-16 text-[var(--cor-secundaria)] mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cor-primaria)] mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Estamos preparando um conteúdo incrível e abençoador para esta página. Volte em breve para conferir as novidades!
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">Voltar para a Página Inicial</Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default GenericPage;
