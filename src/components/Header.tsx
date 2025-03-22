
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Início', href: '#home' },
  { name: 'Serviços', href: '#services' },
  { name: 'Projetos', href: '#portfolio' },
  { name: 'Sobre', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300',
        {
          'py-6': !isScrolled,
          'py-3 bg-white/80 backdrop-blur-md shadow-subtle dark:bg-nibite-black/80': isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-display font-bold text-nibite-black dark:text-white"
        >
          nibite<span className="text-nibite-blue">.</span>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-nibite-blue transition-colors duration-200 dark:text-gray-300 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-nibite-blue hover:bg-nibite-light-blue text-white transition-all duration-300">
            Iniciar Projeto
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 glass-panel rounded-lg overflow-hidden shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-nibite-blue dark:text-gray-300 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-nibite-blue hover:bg-nibite-light-blue text-white transition-all duration-300">
              Iniciar Projeto
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
