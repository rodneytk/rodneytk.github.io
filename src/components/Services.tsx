
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Globe, Database, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Desenvolvimento de Websites',
    description: 'Criamos websites modernos, responsivos e otimizados para motores de busca, proporcionando uma experiência digital excepcional.',
    icon: Globe,
    delay: 0.1,
  },
  {
    title: 'Aplicativos Móveis',
    description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android, com foco em usabilidade e performance.',
    icon: Smartphone,
    delay: 0.2,
  },
  {
    title: 'Desenvolvimento de APIs',
    description: 'Construímos APIs robustas e escaláveis que permitem integração perfeita entre diferentes sistemas e plataformas.',
    icon: Database,
    delay: 0.3,
  },
  {
    title: 'Soluções Personalizadas',
    description: 'Oferecemos soluções de desenvolvimento sob medida para necessidades específicas do seu negócio.',
    icon: Code,
    delay: 0.4,
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 py-1 px-3 rounded-full bg-nibite-blue/10 text-nibite-blue text-sm font-medium"
          >
            Nossos Serviços
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Transforme sua presença digital com nossas soluções
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Oferecemos um conjunto completo de serviços de desenvolvimento para impulsionar 
            sua presença online e otimizar seus processos de negócio.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="glass-panel rounded-xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              <div className="bg-nibite-blue/10 p-3 rounded-full w-fit mb-6">
                <service.icon className="h-6 w-6 text-nibite-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              
              <Button variant="ghost" className="text-nibite-blue hover:text-nibite-light-blue hover:bg-nibite-blue/5 p-0 group">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-nibite-blue hover:bg-nibite-light-blue text-white transition-all duration-300">
            Ver todos os serviços
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
