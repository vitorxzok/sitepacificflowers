"use client";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  const reduce = useReducedMotion();
  
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden border-b border-zinc-100">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[600px]"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-zinc-500 mb-6">
            Fabricação Própria · Jaraguá do Sul
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] text-zinc-950 mb-6">
            Soluções para o comércio e a educação.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-[500px] mb-8">
            Desde 2000, produzimos sinalização de alta durabilidade, papelaria para o dia a dia corporativo e materiais educativos que facilitam o aprendizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#produtos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 text-sm font-medium text-white transition-transform hover:scale-[0.98] hover:bg-emerald-700 active:scale-95"
            >
              Explorar produtos
              <ArrowRight weight="bold" />
            </a>
            <a 
              href="#contato"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-100 px-8 text-sm font-medium text-zinc-900 transition-transform hover:scale-[0.98] hover:bg-zinc-200 active:scale-95"
            >
              Falar com vendas
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-zinc-100 rounded-3xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=1200" 
            alt="Materiais de papelaria e escritório"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border border-black/5 rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
