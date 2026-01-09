import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Elielandrade. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
