import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Menu, X, Search, Instagram, MessageCircle, ArrowRight, 
  ShieldCheck, Zap, TrendingUp, CheckCircle2, Package, Globe, AlertCircle, ImageOff
} from 'lucide-react';
import { products } from './data';
import { Product, Category } from './types';

// Helper for currency formatting
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

// Image Component with error handling and priority loading
const SafeImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-200 text-gray-400 ${className}`}>
        <ImageOff size={40} />
        <span className="text-[10px] mt-2 font-black uppercase">Imagem não encontrada</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Category>('iphone');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (searchQuery.trim().length > 0) {
        return matchesSearch;
      }
      return p.category === activeTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const closeModal = () => setSelectedProduct(null);

  const handleSearchIconClick = () => {
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 text-black overflow-x-hidden pb-safe">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(5%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes floatMascot {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }
        .animate-float-mascot {
          animation: floatMascot 4s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mascot-mask {
          clip-path: inset(0 0 16% 0);
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 20px);
        }
        .tap-highlight-transparent {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      {/* Letreiro Rotativo */}
      <div className="w-full bg-black py-2.5 overflow-hidden border-b border-orange-500/30 relative z-10">
        <div className="animate-marquee">
          <span className="text-white text-[11px] md:text-sm font-black uppercase tracking-[0.2em] px-8 flex items-center gap-4">
            <Globe size={14} className="text-orange-500" /> 
            DÓLAR BAIXO, APROVEITE! PREÇO BAIXO NA LINHA XIAOMI • PARCELAMOS! • FRETE GRÁTIS • 
            DÓLAR BAIXO, APROVEITE! PREÇO BAIXO NA LINHA XIAOMI • PARCELAMOS! • FRETE GRÁTIS
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-[200] w-full max-w-xs bg-black text-white transform transition-transform duration-300 ease-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-2xl border-r border-orange-500/20`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black italic text-orange-500 uppercase">WB MENU</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-white/10 rounded-full text-white active:scale-90 transition-transform">
              <X size={24} />
            </button>
          </div>
          
          <nav className="space-y-4 flex-1 flex flex-col">
            <a href="https://wa.me/5511960817540" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 active:scale-95 transition-transform">
              <div className="p-2.5 bg-green-600 rounded-xl"><MessageCircle size={22} color="white" /></div>
              <span className="font-bold">WhatsApp Vendas</span>
            </a>
            <a href="https://www.instagram.com/wbimportadoss/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 active:scale-95 transition-transform">
              <div className="p-2.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl"><Instagram size={22} color="white" /></div>
              <span className="font-bold">Instagram Oficial</span>
            </a>

            {/* MASCOTE MOVIDO PARA O MENU */}
            <div className="mt-auto pt-10 flex justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/d/1RkAka2EiOqauVsOtthdNG4tC-0gTsW5c"
                alt="Mascote WB Importados"
                className="w-full h-auto max-w-[200px] animate-float-mascot mascot-mask opacity-90"
                style={{
                  filter: 'drop-shadow(0 15px 30px rgba(249, 115, 22, 0.2))'
                }}
              />
            </div>
          </nav>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">WBimportadoss &copy; 2022</p>
          </div>
        </div>
      </div>

      {isSidebarOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[190]" onClick={() => setIsSidebarOpen(false)} />}

      {/* Header */}
      <header className="px-5 pt-8 pb-6 flex flex-col items-center max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between mb-8">
          <button onClick={() => setIsSidebarOpen(true)} className="p-3.5 bg-black text-white rounded-2xl shadow-xl active:scale-90 transition-all border border-orange-500/20">
            <Menu size={24} />
          </button>
          
          <div className="text-center flex-1 mx-4">
            <h1 className="text-3xl md:text-6xl font-black italic tracking-tighter text-black uppercase mb-1 drop-shadow-md leading-none">
              WBimportadoss
            </h1>
            <p className="text-[9px] md:text-xs font-black bg-black text-white px-4 py-1.5 rounded-full inline-block uppercase tracking-widest shadow-xl">
              originais com preço de importação
            </p>
          </div>
          <div className="w-10 md:w-12"></div>
        </div>

        <div className="w-full max-w-2xl relative px-2">
          <div onClick={handleSearchIconClick} className="absolute left-6 top-1/2 -translate-y-1/2 p-2">
            <Search className="text-gray-400" size={24} />
          </div>
          <input 
            ref={searchInputRef}
            type="text"
            placeholder="Buscar modelo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl shadow-xl border-2 border-transparent focus:border-black transition-all text-lg font-bold placeholder:text-gray-300 focus:outline-none"
          />
        </div>
      </header>

      {/* Category Tabs */}
      {!searchQuery && (
        <section className="sticky top-0 z-40 bg-orange-500/90 backdrop-blur-md border-b border-orange-400/30 overflow-x-auto no-scrollbar scroll-smooth snap-x">
          <div className="flex gap-3 px-5 py-4 min-w-max justify-center md:mx-auto">
            {(['iphone', 'xiaomi', 'demais'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`snap-center px-8 py-3.5 rounded-xl font-black uppercase tracking-wider text-xs transition-all border-2 shadow-lg active:scale-90 tap-highlight-transparent ${
                  activeTab === cat 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white/50 text-black border-transparent'
                }`}
              >
                {cat === 'demais' ? 'Demais' : cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Grid de Produtos */}
      <main className="max-w-7xl mx-auto px-5 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl active:scale-[0.98] transition-all cursor-pointer border border-white/20 flex flex-col"
            >
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {product.availableQuantity <= 2 && (
                  <span className="bg-red-600 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter animate-pulse shadow-lg">
                    {product.availableQuantity} UNID. RESTANTES
                  </span>
                )}
              </div>

              <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                <SafeImage src={product.images.front} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 leading-tight uppercase italic tracking-tighter">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex justify-between items-end border-t border-gray-50 pt-4">
                  <div>
                    <p className="text-[10px] text-gray-400 line-through font-black italic opacity-60">
                      {formatPrice(product.finalPrice * 1.2)}
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-black tracking-tighter">
                      {formatPrice(product.finalPrice)}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-lg">
                    <ArrowRight size={20} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Detalhes */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closeModal} />
          
          <div className="relative w-full max-w-5xl h-[92dvh] md:h-auto md:max-h-[90vh] bg-white rounded-t-[3rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in slide-in-from-bottom-full duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-5 right-5 z-[310] p-3.5 bg-black/5 hover:bg-black hover:text-white text-black rounded-full transition-all active:scale-75"
            >
              <X size={24} strokeWidth={3} />
            </button>

            <div className="w-full md:w-1/2 h-[35vh] md:h-auto bg-gray-100 relative">
              <SafeImage src={selectedProduct.images.front} className="w-full h-full object-cover" alt="Produto" />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                Imagens Reais
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto custom-scrollbar flex flex-col bg-white">
              <span className="bg-orange-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest self-start mb-4">
                {selectedProduct.category}
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-black mb-4 tracking-tighter uppercase italic leading-none">
                {selectedProduct.name}
              </h2>
              
              <p className="text-gray-400 font-bold mb-6 text-sm italic border-l-4 border-orange-500 pl-4">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <ShieldCheck size={20} className="text-green-600" />
                  <span className="text-[10px] font-black uppercase text-black">1 Ano Garantia</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <Zap size={20} className="text-orange-600" />
                  <span className="text-[10px] font-black uppercase text-black">Envio Sedex</span>
                </div>
              </div>

              <div className="mt-auto bg-gray-50 p-6 md:p-10 rounded-[2.5rem] border-2 border-white shadow-inner">
                <div className="mb-6">
                  <p className="text-sm text-gray-400 line-through font-black uppercase mb-1 opacity-70">
                    De: {formatPrice(selectedProduct.finalPrice * 1.35)}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-none mb-2">
                    {formatPrice(selectedProduct.finalPrice)}
                  </h3>
                  <p className="text-[10px] text-green-700 font-black uppercase bg-green-100 px-3 py-1 rounded-lg inline-block">
                    ✓ Melhor Preço WB
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/5511960817540?text=Olá WB! Vi o ${selectedProduct.name} no catálogo. Como compro?`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 bg-green-600 text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-lg active:scale-95 transition-transform text-sm"
                  >
                    <MessageCircle size={22} strokeWidth={3} />
                    Comprar via WhatsApp
                  </a>
                  <a 
                    href="https://www.instagram.com/wbimportadoss/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-4 bg-black text-white font-black uppercase tracking-widest py-5 rounded-2xl shadow-lg active:scale-95 transition-transform text-sm"
                  >
                    <Instagram size={22} strokeWidth={3} />
                    Ver no Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action CTA */}
      <a 
        href="https://wa.me/5511960817540"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[150] bg-green-600 text-white p-4 md:p-6 rounded-full shadow-2xl active:scale-75 transition-all animate-bounce border-4 border-white ring-8 ring-green-600/5"
      >
        <MessageCircle size={32} md:size={40} strokeWidth={3} />
      </a>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 text-center border-t-8 border-orange-600">
        <h2 className="text-4xl font-black italic mb-4 tracking-tighter opacity-20 uppercase">WBimportadoss</h2>
        <p className="text-[9px] text-gray-600 uppercase tracking-widest font-black">
          © 2022 WBIMPORTADOSS - PRODUTOS ORIGINAIS
        </p>
      </footer>
    </div>
  );
}
