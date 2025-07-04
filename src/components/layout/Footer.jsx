
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--cor-primaria)] text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="https://storage.googleapis.com/hostinger-horizons-assets-prod/660947a6-fd22-4959-a8aa-d90d25dceb45/fa3d687b6931de2d61fba2d8549c1a8b.jpg" 
                    alt="Logo Finança com Graça" 
                    className="h-10 w-auto"
                  />
                  <span className="text-xl font-bold">Finança com Graça</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Transformando vidas através da educação financeira cristã e devocionais inspiradores.
                </p>
              </div>

              <div>
                <span className="text-lg font-semibold mb-4 block">Navegue</span>
                <ul className="space-y-2">
                  <li><Link to="/educacao-financeira" className="text-gray-300 hover:text-white transition-colors">Educação Financeira</Link></li>
                  <li><Link to="/devocionais" className="text-gray-300 hover:text-white transition-colors">Devocionais</Link></li>
                  <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/comunidade" className="text-gray-300 hover:text-white transition-colors">Comunidade</Link></li>
                </ul>
              </div>

              <div>
                <span className="text-lg font-semibold mb-4 block">Institucional</span>
                <ul className="space-y-2">
                  <li><Link to="/politica-de-privacidade" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</Link></li>
                  <li><Link to="/termos-de-uso" className="text-gray-300 hover:text-white transition-colors">Termos de Uso</Link></li>
                  <li><Link to="/politica-de-ia" className="text-gray-300 hover:text-white transition-colors">Política de IA</Link></li>
                  <li><Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
                </ul>
              </div>
              
              <div>
                <span className="text-lg font-semibold mb-4 block">Contato</span>
                <div className="space-y-4">
                  <a href="mailto:financacomgraca@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                    <Mail className="h-5 w-5 text-[var(--cor-secundaria)]" />
                    <span>financacomgraca@gmail.com</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[var(--cor-secundaria)] mt-1" />
                    <span>Campo Grande – MS</span>
                  </div>
                  <a href="https://instagram.com/financacomgraca" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                     <Instagram className="h-5 w-5 text-[var(--cor-secundaria)]" />
                    <span>@financacomgraca</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Finança com Graça. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-2 italic">
                "Porque dele, e por meio dele, e para ele são todas as coisas. A ele seja a glória para sempre! Amém." - Romanos 11:36
              </p>
            </div>
          </div>
        </footer>
  );
};

export default Footer;