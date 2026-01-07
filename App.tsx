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

  // Filter products: broad search if query exists, otherwise filtered by tab
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (searchQuery.trim().length > 0) {
        return matchesSearch;
      }
      return p.category === activeTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Handle closing modal
  const closeModal = () => setSelectedProduct(null);

  // Focus search input when clicking the glass icon
  const handleSearchIconClick = () => {
    searchInputRef.current?.focus();
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 text-black overflow-x-hidden pb-20">
      
      {/* CSS for Rotating/Marquee Loop and Mascot Animation */}
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
        .rotating-box:hover .animate-marquee {
          animation-play-state: paused;
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
      `}</style>

      {/* MASCOTE ESTÁTICO */}
      <img
        src="https://lh3.googleusercontent.com/d/1RkAka2EiOqauVsOtthdNG4tC-0gTsW5c"
        alt="Mascote WB Importados"
        style={{
          position: 'absolute',
          top: '60px', 
          right: '24px',
          width: '120px',
          height: 'auto',
          zIndex: 200,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.4))'
        }}
        className="animate-float-mascot mascot-mask"
      />

      {/* Rotating Promotional Banner Loop */}
      <div className="w-full bg-black py-2 overflow-hidden rotating-box border-b border-orange-500/30 relative z-10">
        <div className="animate-marquee">
          <span className="text-white text-sm font-black uppercase tracking-[0.2em] px-8 flex items-center gap-4">
            <Globe size={16} className="text-orange-500" /> 
            DÓLAR BAIXO, APROVEITE! PREÇO BAIXO NA LINHA XIAOMI. PARCELAMOS! FRETE GRÁTIS • 
            DÓLAR BAIXO, APROVEITE! PREÇO BAIXO NA LINHA XIAOMI. PARCELAMOS! FRETE GRÁTIS • 
            DÓLAR BAIXO, APROVEITE! PREÇO BAIXO NA LINHA XIAOMI. PARCELAMOS! FRETE GRÁTIS
          </span>
        </div>
      </div>

      {/* Sidebar / Hidden Menu */}
      <div 
        className={`fixed inset-y-0 left-0 z-[110] w-72 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-2xl border-r border-orange-500/20`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black italic tracking-tighter text-orange-500 underline decoration-white underline-offset-4 uppercase">WB MENU</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-orange-500 rounded-full transition-colors text-white">
              <X size={28} />
            </button>
          </div>
          
          <nav className="space-y-6 flex-1">
            <a 
              href="https://wa.me/5511960817540" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-lg font-bold hover:text-orange-500 transition-colors group p-4 bg-gray-900 rounded-2xl border border-gray-800"
            >
              <div className="p-2 bg-green-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <MessageCircle size={24} color="white" />
              </div>
              WhatsApp Vendas
            </a>
            <a 
              href="https://www.instagram.com/wbimportadoss/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-lg font-bold hover:text-orange-500 transition-colors group p-4 bg-gray-900 rounded-2xl border border-gray-800"
            >
              <div className="p-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <Instagram size={24} color="white" />
              </div>
              Instagram Oficial
            </a>
          </nav>

          <div className="mt-auto border-t border-gray-800 pt-6">
            <p className="text-xs text-gray-500 text-center uppercase tracking-widest font-black">
              WBimportadoss &copy; 2022
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Overlay for Sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="px-4 pt-10 pb-6 flex flex-col items-center">
        <div className="w-full max-w-4xl flex items-center justify-between mb-10">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-4 bg-black text-white rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border border-orange-500/30"
          >
            <Menu size={28} />
          </button>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-black uppercase mb-1 drop-shadow-lg leading-none">
              WBimportadoss
            </h1>
            <p className="text-[10px] md:text-sm font-black bg-black text-white px-5 py-2 rounded-full inline-block uppercase tracking-[0.25em] shadow-2xl">
              produtos originais com preços acessíveis pra voce
            </p>
          </div>

          <div className="w-12 hidden md:block"></div>
        </div>

        {/* Functional Search Bar */}
        <div className="w-full max-w-2xl relative group px-4">
          <div 
            onClick={handleSearchIconClick}
            className="absolute left-10 top-1/2 -translate-y-1/2 p-2 cursor-pointer hover:bg-orange-100 rounded-full transition-colors z-10"
          >
            <Search className="text-gray-400 group-focus-within:text-black transition-colors" size={28} />
          </div>
          <input 
            ref={searchInputRef}
            type="text"
            placeholder="O que você está procurando hoje?..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-20 pr-8 py-6 bg-white rounded-[2rem] shadow-2xl border-4 border-transparent focus:border-black transition-all text-xl font-bold placeholder:text-gray-400 focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black p-3 bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          )}
        </div>
      </header>

      {/* Category Tabs */}
      {!searchQuery && (
        <section className="px-4 sticky top-0 z-40 pt-2 pb-6 bg-orange-600/80 backdrop-blur-xl border-b border-orange-500/20">
          <div className="max-w-4xl mx-auto flex gap-4 justify-center overflow-x-auto pb-1 no-scrollbar">
            {(['iphone', 'xiaomi', 'demais'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-12 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm transition-all whitespace-nowrap border-2 shadow-xl ${
                  activeTab === cat 
                    ? 'bg-black text-white border-black scale-105 shadow-orange-900/40' 
                    : 'bg-white/40 text-black border-transparent hover:bg-white/60'
                }`}
              >
                {cat === 'demais' ? 'Demais Produtos' : cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Search Header Feedback */}
      {searchQuery && (
        <div className="max-w-7xl mx-auto px-6 py-6 animate-in slide-in-from-top duration-300">
          <h2 className="text-2xl font-black uppercase italic text-black flex items-center gap-4">
            <Search size={32} />
            Mostrando resultados para: "{searchQuery}"
            <span className="text-sm font-black bg-black text-white px-5 py-2 rounded-full ml-auto shadow-lg">
              {filteredProducts.length} itens encontrados
            </span>
          </h2>
        </div>
      )}

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-6 py-10 relative">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-orange-950/50 transition-all duration-500 hover:-translate-y-4 cursor-pointer flex flex-col border border-white/30"
              >
                {/* Scarcity Tags */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-3">
                  {product.availableQuantity <= 2 && (
                    <span className="bg-red-600 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-tight animate-pulse shadow-2xl border border-white/20">
                      CORRE! APENAS {product.availableQuantity} EM ESTOQUE
                    </span>
                  )}
                  <span className="bg-black text-white text-[9px] font-black px-4 py-1.5 rounded-xl uppercase tracking-[0.15em] shadow-xl border border-white/10 self-start">
                    {product.category === 'iphone' ? 'Apple Original' : 'Selo Xiaomi'}
                  </span>
                </div>

                {/* Main Product Image Container */}
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                  <SafeImage 
                    src={product.images.front} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Info Section */}
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="text-3xl font-black text-black line-clamp-2 mb-4 leading-none uppercase tracking-tighter italic group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map(color => (
                        <span key={color} className="text-[10px] font-black uppercase bg-orange-50 text-orange-900 px-4 py-1.5 rounded-full border border-orange-100 shadow-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-end border-t-2 border-gray-50 pt-5">
                      <div>
                        <p className="text-xs text-gray-400 line-through decoration-red-600 font-black mb-1 italic opacity-70">
                          {formatPrice(product.finalPrice * 1.2)}
                        </p>
                        <p className="text-4xl font-black text-black tracking-tighter leading-none">
                          {formatPrice(product.finalPrice)}
                        </p>
                      </div>
                      <div className="w-14 h-14 bg-black text-white rounded-[1.25rem] flex items-center justify-center group-hover:bg-orange-600 transition-all group-hover:rotate-12 group-hover:scale-110 shadow-xl">
                        <ArrowRight size={32} strokeWidth={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-white/15 rounded-[4rem] backdrop-blur-3xl border-4 border-dashed border-white/30 animate-in fade-in zoom-in duration-500">
            <Package size={120} className="mx-auto text-white/40 mb-8" />
            <h2 className="text-4xl font-black text-white mb-3 uppercase italic tracking-tighter">Nenhum resultado encontrado</h2>
            <p className="text-white/80 font-black uppercase tracking-[0.3em] text-sm">Tente buscar por outro termo ou modelo</p>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 lg:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl animate-in fade-in duration-700" onClick={closeModal} />
          
          <div className="relative w-full max-w-[1400px] max-h-[95vh] bg-white rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row animate-in slide-in-from-bottom-20 duration-500">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 z-[130] p-5 bg-black/10 hover:bg-black hover:text-white text-black rounded-full transition-all hover:rotate-90 active:scale-90"
            >
              <X size={32} strokeWidth={3} />
            </button>

            {/* Visuals Column */}
            <div className="w-full lg:w-1/2 h-[450px] lg:h-auto bg-gray-50 flex flex-col p-10 lg:p-14 border-r-2 border-gray-100">
              <div className="flex-1 overflow-hidden rounded-[3.5rem] relative shadow-2xl border-4 border-white ring-1 ring-gray-200 group/zoom">
                <SafeImage 
                  src={selectedProduct.images.front} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/zoom:scale-110" 
                  alt="Principal" 
                />
                <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md px-6 py-3 rounded-2xl text-white text-[11px] font-black uppercase tracking-[0.2em] border border-white/20 shadow-xl">
                  IMAGEM REAL
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8 h-32 md:h-44">
                 <div className="rounded-[2rem] overflow-hidden cursor-pointer hover:ring-8 ring-orange-500/30 transition-all border-2 border-gray-100 shadow-lg">
                   <SafeImage src={selectedProduct.images.side} className="w-full h-full object-cover" alt="Lado" />
                 </div>
                 <div className="rounded-[2rem] overflow-hidden cursor-pointer hover:ring-8 ring-orange-500/30 transition-all border-2 border-gray-100 shadow-lg">
                   <SafeImage src={selectedProduct.images.back} className="w-full h-full object-cover" alt="Trás" />
                 </div>
                 <div className="bg-black rounded-[2rem] flex flex-col items-center justify-center text-center p-4 text-white border-4 border-orange-600/50 shadow-2xl">
                    <CheckCircle2 size={40} className="text-orange-500 mb-2 animate-pulse" />
                    <p className="text-[10px] font-black uppercase leading-tight tracking-tight">Produto 100% Original</p>
                 </div>
              </div>
            </div>

            {/* Conversion Column */}
            <div className="w-full lg:w-1/2 p-10 lg:p-20 overflow-y-auto custom-scrollbar flex flex-col bg-white">
              <div className="flex justify-between items-start mb-8">
                <span className="bg-orange-600 text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.3em] shadow-xl">
                  {selectedProduct.category.toUpperCase()} SERIES
                </span>
              </div>

              <h2 className="text-5xl lg:text-8xl font-black text-black mb-6 tracking-tighter uppercase italic leading-[0.85] text-balance">
                {selectedProduct.name}
              </h2>
              
              {/* FOMO Component */}
              <div className="flex items-center gap-6 mb-12 text-white bg-red-600 p-7 rounded-[3rem] shadow-[0_15px_40px_rgba(220,38,38,0.3)] border-4 border-red-500 animate-pulse">
                <AlertCircle size={44} className="shrink-0" strokeWidth={3} />
                <div>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">ALTA PROCURA!</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-90 leading-tight">Vários clientes interessados agora. Apenas {selectedProduct.availableQuantity} em estoque.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4 bg-orange-50 p-6 rounded-[2rem] border-2 border-orange-100">
                  <ShieldCheck size={36} className="text-green-600" strokeWidth={3} />
                  <span className="text-[11px] font-black uppercase text-black leading-tight tracking-tight">1 Ano Garantia WBimportadoss</span>
                </div>
                <div className="flex items-center gap-4 bg-orange-50 p-6 rounded-[2rem] border-2 border-orange-100">
                  <Zap size={36} className="text-orange-600" strokeWidth={3} />
                  <span className="text-[11px] font-black uppercase text-black leading-tight tracking-tight">Envio Imediato via Sedex VIP</span>
                </div>
              </div>

              <p className="text-gray-400 font-bold leading-relaxed mb-12 italic text-lg border-l-8 border-orange-600 pl-10">
                "{selectedProduct.description}"
              </p>

              <div className="space-y-12 mb-16">
                <div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">Especificações Técnicas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
                    {selectedProduct.specs.map(spec => (
                      <div key={spec} className="flex items-center gap-4 text-base font-black text-black group">
                        <div className="w-3 h-3 bg-orange-600 rounded-full group-hover:scale-150 transition-transform shadow-lg"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">Cores Disponíveis</h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProduct.colors.map(color => (
                      <span key={color} className="px-7 py-3 bg-black text-white text-[11px] font-black rounded-2xl uppercase tracking-[0.2em] border-2 border-gray-800 shadow-xl hover:bg-orange-600 transition-colors cursor-default">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transaction Box */}
              <div className="mt-auto bg-gradient-to-br from-gray-50 to-orange-50 p-8 lg:p-12 rounded-[4rem] border-4 border-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative overflow-hidden group/cta">
                <div className="absolute -top-6 -right-6 bg-orange-600 text-white w-32 h-32 rounded-full flex items-center justify-center font-black text-[11px] rotate-12 text-center uppercase border-8 border-white p-4 shadow-2xl group-hover/cta:rotate-0 transition-transform duration-500">
                  Melhor Preço do Brasil
                </div>
                
                <div className="flex flex-col mb-10">
                  <p className="text-lg text-gray-400 line-through font-black uppercase tracking-[0.2em] mb-1 italic opacity-80">
                    DE: {formatPrice(selectedProduct.finalPrice * 1.35)}
                  </p>
                  <h3 className="text-5xl lg:text-7xl font-black text-black tracking-tighter leading-none mb-4">
                    {formatPrice(selectedProduct.finalPrice)}
                  </h3>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={28} className="text-green-600" />
                    <p className="text-base text-green-700 font-black uppercase tracking-widest bg-green-200/40 px-5 py-2 rounded-xl">
                      Economize {formatPrice(selectedProduct.finalPrice * 0.35)} HOJE
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <a 
                    href={`https://wa.me/5511960817540?text=Olá WB! Acabei de ver o ${selectedProduct.name} no catálogo. Tenho interesse imediato, como fazemos?`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-5 bg-green-600 text-white font-black uppercase tracking-[0.25em] py-7 rounded-[2rem] hover:bg-green-700 transition-all hover:scale-[1.02] shadow-[0_15px_40px_rgba(22,163,74,0.3)] text-lg active:scale-95 group/wa"
                  >
                    <MessageCircle size={36} strokeWidth={3} className="group-hover/wa:rotate-12 transition-transform" />
                    Chamar no WhatsApp
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/wbimportadoss/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-5 bg-black text-white font-black uppercase tracking-[0.25em] py-7 rounded-[2rem] hover:bg-gray-900 transition-all hover:scale-[1.02] shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-lg active:scale-95 group/insta"
                  >
                    <Instagram size={36} strokeWidth={3} className="group-hover/insta:rotate-12 transition-transform" />
                    Ver no Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-24 mt-32 px-6 border-t-[20px] border-orange-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-9xl font-black italic mb-16 tracking-tighter opacity-10 uppercase select-none">WBimportadoss</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="flex flex-col items-center group">
              <div className="p-8 bg-gray-900 rounded-[3rem] mb-6 group-hover:bg-orange-600 transition-colors shadow-2xl group-hover:-translate-y-4 duration-300">
                <ShieldCheck size={56} className="text-orange-500 group-hover:text-white" strokeWidth={3} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">100% Original Apple/Xiaomi</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-8 bg-gray-900 rounded-[3rem] mb-6 group-hover:bg-orange-600 transition-colors shadow-2xl group-hover:-translate-y-4 duration-300">
                <TrendingUp size={56} className="text-orange-500 group-hover:text-white" strokeWidth={3} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Referência no Importado</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-8 bg-gray-900 rounded-[3rem] mb-6 group-hover:bg-orange-600 transition-colors shadow-2xl group-hover:-translate-y-4 duration-300">
                <MessageCircle size={56} className="text-orange-500 group-hover:text-white" strokeWidth={3} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Atendimento Humanizado</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-8 bg-gray-900 rounded-[3rem] mb-6 group-hover:bg-orange-600 transition-colors shadow-2xl group-hover:-translate-y-4 duration-300">
                <Package size={56} className="text-orange-500 group-hover:text-white" strokeWidth={3} />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Entrega Blindada Garantida</span>
            </div>
          </div>
          <div className="h-px bg-gray-900 w-full mb-10"></div>
          <p className="text-[11px] text-gray-700 uppercase tracking-[0.5em] font-black">
            © 2022 WBIMPORTADOSS - EXCELÊNCIA EM IMPORTADOS ORIGINAIS
          </p>
        </div>
      </footer>

      {/* Floating Action CTA */}
      <a 
        href="https://wa.me/5511960817540"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-10 right-10 z-[150] bg-green-600 text-white p-6 rounded-full shadow-[0_20px_60px_rgba(22,163,74,0.4)] hover:scale-110 active:scale-90 transition-all animate-bounce flex items-center gap-4 group border-8 border-white ring-8 ring-green-600/10"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-1000 font-black uppercase tracking-[0.2em] whitespace-nowrap px-0 group-hover:px-6 text-sm">Chamar Consultor WB</span>
        <MessageCircle size={44} strokeWidth={4} />
      </a>
    </div>
  );
}
