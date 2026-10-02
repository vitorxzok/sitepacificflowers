"use client";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-4">
          Faça uma cotação
        </h2>
        <p className="text-zinc-600 mb-12">
          Seja para abastecer sua loja, escola ou empresa, nossa equipe de vendas está pronta para enviar nosso catálogo completo e condições comerciais.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 text-left space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-900">Nome completo</label>
              <input 
                id="name"
                type="text" 
                className="w-full h-12 rounded-lg border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
                placeholder="Seu nome"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-900">E-mail corporativo</label>
              <input 
                id="email"
                type="email" 
                className="w-full h-12 rounded-lg border border-zinc-200 bg-zinc-50 px-4 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
                placeholder="email@empresa.com.br"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-900">Como podemos ajudar?</label>
            <textarea 
              id="message"
              className="w-full h-32 resize-none rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
              placeholder="Descreva quais produtos você busca (Sinalização, Papelaria, Educativos)..."
            />
          </div>
          <button 
            type="button"
            className="w-full h-12 rounded-lg bg-emerald-600 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
