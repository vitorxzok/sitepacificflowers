"use client";
import { motion, useReducedMotion } from "motion/react";
import { Factory, Truck, MapPin } from "@phosphor-icons/react/dist/ssr";

export function About() {
  const reduce = useReducedMotion();

  const stats = [
    { icon: Factory, label: "Fundada em", value: "2000" },
    { icon: MapPin, label: "Sede", value: "Jaraguá do Sul, SC" },
    { icon: Truck, label: "Atuação", value: "Nacional" },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Estrutura industrial com alcance nacional.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-[500px]">
            A Pacific Flowers nasceu com o propósito de suprir o mercado brasileiro com materiais de apoio essenciais. Nosso foco na precisão da manufatura nos permite atender tanto grandes distribuidores quanto pequenas papelarias, mantendo o padrão de qualidade em cada placa, envelope ou jogo pedagógico.
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col border-t border-zinc-800 pt-6">
                <stat.icon size={24} className="text-emerald-500 mb-4" />
                <span className="text-3xl font-light tracking-tighter mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-900"
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=900" 
            alt="Processo de fabricação" 
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
