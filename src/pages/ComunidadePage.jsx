
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, TrendingUp, Heart } from 'lucide-react';

const benefits = [
  { icon: <MessageSquare />, title: 'Troca de Experiências', description: 'Compartilhe suas vitórias e desafios com pessoas que entendem sua jornada.' },
  { icon: <TrendingUp />, title: 'Crescimento Conjunto', description: 'Aprenda com as dúvidas e insights de outros membros da comunidade.' },
  { icon: <Heart />, title: 'Apoio e Oração', description: 'Encontre um ambiente seguro para pedir oração e encorajar outros irmãos na fé.' },
];

const ComunidadePage = () => {
  return (
    <>
      <Helmet>
        <title>Comunidade | Finança com Graça</title>
        <meta name="description" content="Junte-se à nossa comunidade no Telegram e conecte-se com outros cristãos em uma jornada de crescimento financeiro e espiritual." />
      </Helmet>

      <div className="bg-white">
        <header className="pt-32 pb-20 text-center bg-gradient-to-b from-[var(--cor-primaria)] to-[#4a6b8a] text-white pattern-overlay">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="container mx-auto px-6"
          >
            <Users className="mx-auto h-16 w-16 mb-4 text-[var(--cor-secundaria)]" />
            <h1 className="text-5xl font-bold mb-4">Nossa Comunidade</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              "Assim como o ferro afia o ferro, o homem afia o seu companheiro." - Provérbios 27:17
            </p>
          </motion.div>
        </header>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-[var(--cor-primaria)] mb-6">Junte-se a Nós no Telegram!</h2>
              <p className="text-lg text-gray-700 mb-10">
                Criamos um espaço exclusivo e gratuito no Telegram para que você possa se conectar, aprender e crescer junto com outros cristãos que também buscam uma vida financeira com graça e propósito.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block p-4 bg-[var(--cor-secundaria)] text-white rounded-full mb-4">
                    {React.cloneElement(benefit.icon, { className: "h-8 w-8" })}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--cor-primaria)] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="btn-secondary text-lg">
                <a href="https://t.me/financacomgraca" target="_blank" rel="noopener noreferrer">
                  Entrar na Comunidade Agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComunidadePage;
