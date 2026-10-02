/* eslint-disable @next/next/no-img-element */
"use client";
import { products } from "@/data/products";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

export function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-50" id="produtos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-emerald-600 uppercase mb-8">
          Catálogo de Produtos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-zinc-200 p-4 hover:border-emerald-300 transition-colors flex flex-col h-full"
            >
              <div className="aspect-square bg-zinc-100 mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs text-zinc-500 mb-1">{product.category}</div>
              <h3 className="text-sm font-medium text-zinc-900 mb-2 flex-grow line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                <span className="font-mono text-emerald-700 font-medium">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <button 
                  className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-emerald-600 hover:text-white transition-colors"
                  aria-label="Adicionar ao carrinho"
                >
                  <ShoppingCart size={16} weight="bold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
