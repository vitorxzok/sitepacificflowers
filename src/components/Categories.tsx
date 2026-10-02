"use client";
import { motion, useReducedMotion } from "motion/react";
import { WarningCircle, Notebook, PuzzlePiece, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const categories = [
  {
    id: "sinalizacao",
    title: "Sinalização e Avisos",
    desc: "Placas indicativas em PVC e PS para identificação de ambientes, comércio e regras de convivência. Alta visibilidade e resistência.",
    icon: WarningCircle,
    color: "bg-orange-50 text-orange-600",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "papelaria",
    title: "Papelaria Corporativa",
    desc: "Envelopes padronizados, pastas de arquivo e fichários desenvolvidos para organização impecável no escritório.",
    icon: Notebook,
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "educativos",
    title: "Artigos Educativos",
    desc: "Jogos da memória, dinheirinho de papel e materiais didáticos que transformam o aprendizado em algo tangível.",
    icon: PuzzlePiece,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export function Categories() {
  const reduce = useReducedMotion();

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">
            Catálogo Especializado
          </h2>
          <p className="text-zinc-600 max-w-[60ch] leading-relaxed">
            Nossas linhas são desenhadas para atender desde demandas corporativas robustas até o desenvolvimento educacional infantil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100"
            >
              <div className="relative aspect-[4/3] bg-zinc-200 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className={`w-12 h-12 rounded-full ${cat.color} flex items-center justify-center mb-6`}>
                  <cat.icon size={24} weight="duotone" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{cat.title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                  {cat.desc}
                </p>
                <a href="#contato" className="text-sm font-medium text-zinc-900 inline-flex items-center gap-1 hover:text-emerald-600 transition-colors">
                  Solicitar orçamento <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
