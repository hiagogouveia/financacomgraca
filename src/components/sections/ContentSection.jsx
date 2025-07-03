import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContentSection = ({ id, title, description, listItems, buttonText, buttonIcon, buttonClass, onButtonClick, imageUrl, imageAlt, imageBadgeIcon, imageBadgeText, reverseLayout = false }) => {
  const Icon = buttonIcon;
  const BadgeIcon = imageBadgeIcon;
  
  return (
    <section id={id} className={`section-padding ${reverseLayout ? 'bg-white' : 'bg-[var(--cor-fundo-claro)]'}`}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: reverseLayout ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`order-1 ${reverseLayout ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--cor-primaria)'}}>
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>
            <div className="space-y-4 mb-8">
              {listItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-[var(--cor-secundaria)]" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Button 
              className={buttonClass}
              onClick={onButtonClick}
            >
              {buttonText} {Icon && <Icon className="ml-2 h-5 w-5" />}
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: reverseLayout ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative order-2 ${reverseLayout ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <img  
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
              alt={imageAlt}
              src={imageUrl} />
            <div className={`absolute -bottom-6 ${reverseLayout ? '-left-6' : '-right-6'} ${reverseLayout ? 'bg-[var(--cor-primaria)]' : 'bg-[var(--cor-secundaria)]'} text-white p-6 rounded-xl shadow-lg`}>
              {BadgeIcon && <BadgeIcon className="h-8 w-8 mb-2" />}
              <p className="font-bold">{imageBadgeText}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;