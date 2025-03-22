
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

// In a real project, these would be actual images from your project
const projects: Project[] = [
  {
    title: 'Tech Company Redesign',
    category: 'Website',
    description: 'Redesign completo do website corporativo, melhorando a experiência do usuário e as taxas de conversão.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'E-commerce Mobile App',
    category: 'Aplicativo',
    description: 'Aplicativo de compras para uma marca de moda, com recursos personalizados de recomendação de produtos.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Banking API Solution',
    category: 'API',
    description: 'Sistema de API bancária segura para processamento de transações e gestão de contas de usuários.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section id="portfolio" ref={ref} className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 py-1 px-3 rounded-full bg-nibite-orange/10 text-nibite-orange text-sm font-medium"
          >
            Nosso Portfólio
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Conheça nossos projetos mais recentes
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Uma seleção de trabalhos que refletem nossa experiência e compromisso 
            com a qualidade no desenvolvimento digital.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    Ver projeto
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-nibite-orange font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Button variant="ghost" className="text-nibite-orange hover:text-nibite-light-orange hover:bg-nibite-orange/5 p-0 group">
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-nibite-orange hover:bg-nibite-light-orange text-white transition-all duration-300">
            Ver todos os projetos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
