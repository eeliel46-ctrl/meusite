import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Disponível para projetos</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Design que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">conecta</span> e converte.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Olá, sou <span className="font-bold text-slate-900">Elielandrade</span>. Transformo problemas complexos em interfaces simples, intuitivas e visualmente impactantes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link 
                  to="portfolio" 
                  smooth={true}
                  offset={-50}
                  className="px-8 py-4 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                >
                  Ver Projetos <ArrowRight size={20} />
                </Link>
                <a 
                  href="#" 
                  className="px-8 py-4 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-primary-200 hover:text-primary-600 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Download CV <Download size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-[40px] overflow-hidden border-8 border-white shadow-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Elielandrade" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3"
              >
                <div className="p-2 bg-primary-100 rounded-xl text-primary-600">
                  <MousePointer2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Experiência</p>
                  <p className="text-sm font-bold text-slate-900">5+ Anos</p>
                </div>
              </motion.div>
            </div>
            
            {/* Abstract Shapes behind */}
            <div className="absolute top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
