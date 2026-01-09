import React from 'react';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Icon Marker */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-3 h-3 bg-primary-600 rounded-full" />
                </div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className={`
                    bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary-200 transition-colors
                    ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                  `}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-md w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
