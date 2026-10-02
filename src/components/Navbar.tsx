"use client";
import { ShoppingCart, List } from "@phosphor-icons/react/dist/ssr";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-mono font-bold text-xs">PF</span>
          </div>
          <span className="font-semibold text-zinc-900 tracking-tight">Pacific Flowers</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#" className="hover:text-emerald-600 transition-colors">Início</a>
          <a href="#produtos" className="hover:text-emerald-600 transition-colors">Produtos</a>
          <a href="#sobre" className="hover:text-emerald-600 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-emerald-600 transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-zinc-600 hover:text-emerald-600 transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="md:hidden p-2 text-zinc-600">
            <List size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
