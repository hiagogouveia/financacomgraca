import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ handleFeatureClick, containerVariants, itemVariants }) => {
  return (
    <section id="inicio" className="pt-32 pb-20 section-padding gradient-primary pattern-overlay">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
            variants={itemVariants}
          >
            Finança com <span className="text-[var(--cor-secundaria)]">Graça</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
            variants={itemVariants}
          >
            Transforme sua vida financeira com sabedoria bíblica. 
            Aprenda a prosperar com propósito e fé.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => handleFeatureClick('comece-agora')}
            >
              Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-[var(--cor-primaria)]"
              onClick={() => handleFeatureClick('saiba-mais')}
            >
              Saiba Mais
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;