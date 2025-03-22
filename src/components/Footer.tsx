
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Facebook, ChevronRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <a href="#home" className="text-2xl font-display font-bold mb-6 inline-block">
              nibite<span className="text-nibite-blue">.</span>
            </a>
            <p className="text-gray-400 mb-6">
              Transformamos ideias em experiências digitais excepcionais, com foco em qualidade e resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Desenvolvimento de Website',
                'Aplicativos Móveis',
                'Desenvolvimento de APIs',
                'Soluções Personalizadas',
                'E-commerce',
                'UX/UI Design',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {[
                'Sobre Nós',
                'Portfólio',
                'Depoimentos',
                'Carreiras',
                'Parceiros',
                'Blog',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p>Av. Paulista, 1000 - Bela Vista</p>
                <p>São Paulo - SP, 01310-100</p>
              </li>
              <li>contato@nibite.com.br</li>
              <li>+55 (11) 9999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Nibite. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
