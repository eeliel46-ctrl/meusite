import React from 'react';
import { projects } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Projetos Selecionados</h2>
            <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
          </div>
          <p className="text-slate-600 max-w-md text-right md:text-right text-left">
            Uma coleção de trabalhos recentes focados em UI/UX e Design de Produto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-slate-800 shadow-sm border border-white/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary-600 transition-colors mt-auto">
                  Ver Detalhes <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
