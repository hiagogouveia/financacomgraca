import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, BookOpen, Users, Target, PiggyBank } from 'lucide-react';

const featuresData = [
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Educação Financeira",
    description: "Aprenda princípios bíblicos para administrar suas finanças com sabedoria e responsabilidade."
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Devocionais Diários",
    description: "Reflexões espirituais que conectam fé e finanças para uma vida próspera em todos os aspectos."
  },
  {
    icon: <PiggyBank className="h-12 w-12" />,
    title: "Planejamento Financeiro",
    description: "Ferramentas práticas para criar orçamentos, economizar e investir com propósito divino."
  },
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "Estudos Bíblicos",
    description: "Mergulhe nas escrituras e descubra o que Deus diz sobre prosperidade e mordomia."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Comunidade",
    description: "Conecte-se com outros cristãos em jornada similar de crescimento financeiro e espiritual."
  },
  {
    icon: <Target className="h-12 w-12" />,
    title: "Metas & Propósito",
    description: "Defina objetivos financeiros alinhados com os propósitos de Deus para sua vida."
  }
];

const Features = ({ handleFeatureClick }) => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--cor-primaria)'}}>
            O que oferecemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conteúdo abençoado para transformar sua relação com o dinheiro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleFeatureClick(feature.title)}
              style={{ cursor: 'pointer' }}
            >
              <div className="text-[var(--cor-secundaria)] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{color: 'var(--cor-primaria)'}}>
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;