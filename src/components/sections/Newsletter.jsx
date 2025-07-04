
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log("Email a ser armazenado:", email);
      
      toast({
        title: "✅ Inscrição recebida!",
        description: `Obrigado por se inscrever! Enviamos uma confirmação para ${email}.`,
      });
      setEmail('');
    } else {
      toast({
        variant: "destructive",
        title: "📧 E-mail inválido",
        description: "Por favor, insira um endereço de e-mail válido.",
      });
    }
  };

  return (
    <section id="contato" className="section-padding gradient-secondary">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Receba Conteúdo Abençoado
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Inscreva-se em nossa newsletter e receba devocionais e dicas financeiras 
            diretamente em seu e-mail.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-gray-800 text-lg border-2 border-transparent focus:border-[var(--cor-primaria)] focus:outline-none"
              required
            />
            <Button 
              type="submit"
              className="bg-[var(--cor-primaria)] hover:bg-[#2a4a66] text-white px-8 py-4 text-lg"
            >
              Inscrever-se
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;