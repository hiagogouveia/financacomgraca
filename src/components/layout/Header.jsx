
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: "/educacao-financeira", text: "Educação Financeira" },
  { to: "/devocionais", text: "Devocionais" },
  { to: "/blog", text: "Blog" },
  { to: "/sobre", text: "Sobre" },
  { to: "/contato", text: "Contato" },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/660947a6-fd22-4959-a8aa-d90d25dceb45/fa3d687b6931de2d61fba2d8549c1a8b.jpg" 
              alt="Logo Finança com Graça" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-white">
              Finança com Graça
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-white hover:text-[var(--cor-secundaria)] transition-colors">
                {link.text}
              </Link>
            ))}
          </div>

          <Button 
            asChild
            className="btn-primary hidden lg:flex whitespace-nowrap" 
          >
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">Inscrever-se</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
