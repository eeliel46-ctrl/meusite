import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Sobre', to: 'about' },
    { name: 'Portfólio', to: 'portfolio' },
    { name: 'Experiência', to: 'experience' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full
          bg-white/80 backdrop-blur-md border border-white/20 shadow-soft
          transition-all duration-300
          ${scrolled ? 'shadow-lg' : ''}
        `}>
          {/* Logo */}
          <Link to="hero" smooth={true} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
              <span className="font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-slate-800 text-lg tracking-tight">Elielandrade</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                offset={-100}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-slate-900/20"
            >
              Vamos conversar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 p-4 md:hidden"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary-600 py-2 border-b border-slate-50 last:border-0"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
