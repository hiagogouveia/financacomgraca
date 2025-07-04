
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, BookOpen, DollarSign, Star, TrendingUp, Users, PiggyBank, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Newsletter from '@/components/sections/Newsletter';

const featuresData = [
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Educação Financeira",
    description: "Princípios bíblicos para administrar suas finanças com sabedoria.",
    link: "/educacao-financeira"
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Devocionais Diários",
    description: "Reflexões que conectam fé e finanças para uma vida próspera.",
    link: "/devocionais"
  },
  {
    icon: <PiggyBank className="h-12 w-12" />,
    title: "Planejamento Financeiro",
    description: "Ferramentas para criar orçamentos, economizar e investir com propósito.",
    link: "/planejamento-financeiro"
  },
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "Estudos Bíblicos",
    description: "Descubra o que Deus diz sobre prosperidade e mordomia.",
    link: "/estudos-biblicos"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Comunidade",
    description: "Conecte-se com outros cristãos em uma jornada de crescimento.",
    link: "/comunidade"
  },
  {
    icon: <Target className="h-12 w-12" />,
    title: "Metas & Propósito",
    description: "Defina objetivos financeiros alinhados com os propósitos de Deus.",
    link: "/metas-e-proposito"
  }
];

const HomePage = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: `A página "${feature}" está sendo preparada! Em breve, estará disponível.`,
      duration: 4000,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Finança com Graça - Educação Financeira Cristã</title>
        <meta name="description" content="Transforme sua vida financeira com sabedoria bíblica. Conteúdo sobre finanças pessoais e devocionais cristãs para uma vida próspera e abençoada." />
        <meta property="og:title" content="Finança com Graça - Educação Financeira Cristã" />
        <meta property="og:description" content="Aprenda a prosperar com propósito e fé, aplicando princípios bíblicos em suas finanças." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://financacomgraca.com.br" />
      </Helmet>
      
      <section id="inicio" className="pt-32 pb-20 section-padding gradient-primary pattern-overlay">
        <div className="container mx-auto px-6">
          <motion.div className="text-center text-white" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow" variants={itemVariants}>
              Finança com <span className="text-[var(--cor-secundaria)]">Graça</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" variants={itemVariants}>
              Transforme sua vida financeira com sabedoria bíblica. Aprenda a prosperar com propósito e fé.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <Button asChild className="btn-secondary text-lg px-8 py-4">
                <Link to="/blog">Comece Agora <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-[var(--cor-primaria)]">
                <Link to="/sobre">Saiba Mais</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--cor-primaria)'}}>O que oferecemos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Conteúdo abençoado para transformar sua relação com o dinheiro</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100 flex flex-col" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Link to={feature.link} className="flex-grow">
                  <div className="text-[var(--cor-secundaria)] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3" style={{color: 'var(--cor-primaria)'}}>{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default HomePage;
