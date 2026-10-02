import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-zinc-500">
        <div>
          <h3 className="text-zinc-950 font-semibold mb-4 text-base">Pacific Flowers</h3>
          <p className="max-w-[250px] leading-relaxed">
            Indústria e Comércio de materiais de papelaria, educativos e sinalização. Qualidade que atravessa o Brasil.
          </p>
        </div>
        <div>
          <h3 className="text-zinc-950 font-semibold mb-4 text-base">Contato</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Phone size={16} /> (47) 3275-0000</li>
            <li className="flex items-center gap-2"><EnvelopeSimple size={16} /> contato@pacificflowers.com.br</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 flex-shrink-0" /> <span className="leading-tight">Jaraguá do Sul, SC<br/>Brasil</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-950 font-semibold mb-4 text-base">Links Rápidos</h3>
          <ul className="space-y-3">
            <li><a href="#produtos" className="hover:text-emerald-600 transition-colors">Catálogo de Produtos</a></li>
            <li><a href="#contato" className="hover:text-emerald-600 transition-colors">Solicitar Orçamento</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-100 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Pacific Flowers Indústria e Comércio Ltda.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
