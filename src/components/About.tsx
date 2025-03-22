
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Users, Clock, Zap } from 'lucide-react';

interface ValueProp {
  title: string;
  description: string;
  icon: React.ElementType;
}

const values: ValueProp[] = [
  {
    title: 'Inovação',
    description: 'Buscamos constantemente novas tecnologias e abordagens para oferecer as melhores soluções digitais.',
    icon: Lightbulb,
  },
  {
    title: 'Colaboração',
    description: 'Trabalhamos em estreita parceria com nossos clientes para entender suas necessidades e objetivos.',
    icon: Users,
  },
  {
    title: 'Comprometimento',
    description: 'Cumprimos prazos e orçamentos, garantindo entregas de alta qualidade e sem surpresas.',
    icon: Clock,
  },
  {
    title: 'Eficiência',
    description: 'Utilizamos processos ágeis para desenvolver soluções rápidas e eficientes, sem comprometer a qualidade.',
    icon: Zap,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 py-1 px-3 rounded-full bg-nibite-orange/10 text-nibite-orange text-sm font-medium">
              Sobre a Nibite
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Criamos soluções digitais que impulsionam o seu negócio
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A Nibite é uma agência de desenvolvimento digital focada em criar experiências
              digitais excepcionais. Nossa equipe altamente qualificada combina expertise
              técnica e visão estratégica para desenvolver soluções que atendam às necessidades
              específicas de cada cliente.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Desde 2018, temos ajudado empresas de todos os tamanhos a transformar suas
              ideias em produtos digitais de sucesso, seja um website, aplicativo ou sistema
              personalizado.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { value: '5+', label: 'Anos no mercado' },
                { value: '100%', label: 'Clientes satisfeitos' },
                { value: '200+', label: 'Projetos realizados' },
                { value: '15+', label: 'Especialistas' },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-nibite-orange mb-1">{stat.value}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-panel rounded-xl p-6 shadow-subtle"
              >
                <div className="bg-nibite-orange/10 p-3 rounded-full w-fit mb-4">
                  <value.icon className="h-5 w-5 text-nibite-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
