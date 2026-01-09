import React from 'react';
import { Code, Palette, Zap, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Palette size={24} />, title: "UI Design", desc: "Criação de interfaces visuais modernas e consistentes." },
    { icon: <Layout size={24} />, title: "UX Research", desc: "Pesquisa de usuários, wireframes e testes de usabilidade." },
    { icon: <Code size={24} />, title: "Frontend", desc: "Conhecimento em HTML, CSS, React e Tailwind." },
    { icon: <Zap size={24} />, title: "Prototipagem", desc: "Prototipagem de alta fidelidade no Figma." },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-slate-600 leading-relaxed">
            Sou um Product Designer apaixonado por criar experiências digitais que facilitam a vida das pessoas. 
            Com mais de 5 anos de experiência, combino estética e funcionalidade para entregar produtos que não apenas 
            parecem bons, mas funcionam perfeitamente. Minha abordagem é centrada no usuário e baseada em dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform shadow-sm">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
