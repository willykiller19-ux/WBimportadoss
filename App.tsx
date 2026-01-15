import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Menu, X, Search, Instagram, MessageCircle, ArrowRight, 
  ShieldCheck, Zap, Globe, AlertCircle, ImageOff, Info
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

// Map of color names to CSS classes/colors
const colorMap: Record<string, string> = {
  'Preto': 'bg-black',
  'Prata': 'bg-gray-400',
  'Rosé': 'bg-[#E7B9B9]',
  'Dourado': 'bg-[#D4AF37]',
  'Branco': 'bg-white border border-gray-200',
  'Laranja': 'bg-orange-500',
  'Azul': 'bg-blue-600',
  'Silver': 'bg-slate-300',
  'Verde': 'bg-green-600',
  'Lilás': 'bg-purple-300',
  'Roxo': 'bg-purple-700',
  'Gold': 'bg-amber-400',
  'Branco/Preto': 'bg-gradient-to-r from-white to-black',
};

// Map for Category Display Names
const categoryLabels: Record<Category, string> = {
  iphone: 'Apple 🍎',
  xiaomi: 'Xiaomi 📱',
  demais: 'Demais Produtos 🎧⌚🎮'
};

// Image Component with error handling
const SafeImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-200 text-gray-400 ${className}`}>
        <ImageOff size={24} />
        <span className="text-[8px] mt-1 font-black uppercase">Imagem indisponível</span>
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
  const [activeImageKey, setActiveImageKey] = useState<'front' | 'side' | 'back'>('front');
  const [showAlert, setShowAlert] = useState(true);
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

  const closeModal = () => {
    setSelectedProduct(null);
    setActiveImageKey('front');
  };

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
        @keyframes marquee { 0% { transform: translateX(5%); } 100% { transform: translateX(-100%); } }
        @keyframes floatMascot { 0%, 100% { transform: translateY(0) rotate(2deg); } 50% { transform: translateY(-12px) rotate(-2deg); } }
        @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-marquee { display: inline-block; white-space: nowrap; animation: marquee 25s linear infinite; }
        .animate-float-mascot { animation: floatMascot 4s ease-in-out infinite; }
        .animate-slide-up { animation: slideUp 0.5s ease-out forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom, 20px); }
        .tap-highlight-transparent { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* Alerta Flutuante */}
      {showAlert && (
        <div className="fixed bottom-24 left-4 right-4 z-[250] md:left-auto md:right-10 md:w-96 animate-slide-up">
          <div className="bg-black text-white p-5 rounded-[2rem] shadow-2xl border-2 border-orange-500/50 relative overflow-hidden group">
            <button onClick={() => setShowAlert(false)} className="absolute top-3 right-3 p-1.5 bg-white/10 rounded-full">
              <X size={16} />
            </button>
            <div className="flex gap-4 items-start">
              <div className="bg-orange-500 p-2.5 rounded-2xl shrink-0"><Info size={24} /></div>
              <div>
                <p className="text-[10px] font-black text-orange-400 uppercase mb-1">Última Atualização</p>
                <p className="text-sm font-bold leading-tight mb-2">Preços atualizados em <span className="text-orange-500">16/01/2025</span></p>
                <p className="text-[11px] text-gray-400">A WB Importadoss fornece <span className="text-white font-bold italic">produtos originais importados</span>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Letreiro */}
      <div className="w-full bg-black py-2 overflow-hidden border-b border-orange-500/30 relative z-10">
        <div className="animate-marquee">
          <span className="text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em] px-8 flex items-center gap-4">
            <Globe size={14} className="text-orange-500" /> 
            QUALIDADE APPLE E XIAOMI • PARCELAMOS! • FRETE GRÁTIS EM SP • PRODUTOS ORIGINAIS
          </span>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-[200] w-full max-w-xs bg-black text-white transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl border-r border-orange-500/20`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black italic text-orange-500 uppercase">WB MENU</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-white/10 rounded-full active:scale-90"><X size={24} /></button>
          </div>
          <nav className="space-y-4 flex-1 flex flex-col">
            <a href="https://wa.me/5511960817540" target="_blank" className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl"><div className="p-2.5 bg-green-600 rounded-xl"><MessageCircle size={22} /></div><span className="font-bold">WhatsApp Vendas</span></a>
            <a href="https://www.instagram.com/wbimportadoss/" target="_blank" className="flex items-center gap-4 p-5 bg-gray-900 rounded-2xl"><div className="p-2.5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-xl"><Instagram size={22} /></div><span className="font-bold">Instagram Oficial</span></a>
          </nav>
        </div>
      </div>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[190]" onClick={() => setIsSidebarOpen(false)} />}

      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex flex-col items-center max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between mb-6">
          <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-black text-white rounded-xl active:scale-90 border border-orange-500/20"><Menu size={24} /></button>
          <div className="text-center flex-1 mx-2">
            <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter text-black uppercase leading-none">WBimportadoss</h1>
            <p className="text-[8px] md:text-xs font-black bg-black text-white px-3 py-1 rounded-full inline-block uppercase tracking-widest mt-1 shadow-xl">originais importados</p>
          </div>
          <div className="w-10"></div>
        </div>
        <div className="w-full max-w-2xl relative">
          <div onClick={handleSearchIconClick} className="absolute left-4 top-1/2 -translate-y-1/2 p-1"><Search className="text-gray-400" size={20} /></div>
          <input ref={searchInputRef} type="text" placeholder="Buscar modelo..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl shadow-lg border-2 border-transparent focus:border-black transition-all text-sm font-bold" />
        </div>
      </header>

      {/* Tabs */}
      {!searchQuery && (
        <section className="sticky top-0 z-40 bg-orange-500/90 backdrop-blur-md border-b border-orange-400/30 overflow-x-auto no-scrollbar snap-x">
          <div className="flex gap-2 px-4 py-3 min-w-max justify-center md:mx-auto">
            {(['iphone', 'xiaomi', 'demais'] as Category[]).map((cat) => (
              <button key={cat} onClick={() => setActiveTab(cat)} className={`snap-center px-4 py-3 rounded-xl font-black uppercase text-[10px] md:text-xs transition-all border-2 shadow-md ${activeTab === cat ? 'bg-black text-white border-black' : 'bg-white/50 text-black border-transparent'}`}>
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Grid de Produtos - Grade 2x2 no mobile */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg active:scale-[0.97] transition-all cursor-pointer border border-white/20 flex flex-col h-full"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-50 shrink-0">
                <SafeImage src={product.images.front} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>

              <div className="p-3 md:p-6 flex flex-col flex-1">
                <h3 className="text-[11px] md:text-xl font-black text-black mb-1 leading-tight uppercase italic tracking-tighter line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex justify-between items-end pt-2 border-t border-gray-50">
                  <div>
                    <p className="text-[8px] md:text-[10px] text-gray-400 line-through font-black italic opacity-60">
                      {formatPrice(product.finalPrice * 1.2)}
                    </p>
                    <p className="text-sm md:text-2xl font-black text-black tracking-tighter">
                      {formatPrice(product.finalPrice)}
                    </p>
                  </div>
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-black text-white rounded-lg flex items-center justify-center shadow-md">
                    <ArrowRight size={14} md:size={20} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal - Otimizado */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[300] flex items-end md:items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closeModal} />
          
          <div className="relative w-full max-w-4xl h-[90dvh] md:h-auto md:max-h-[85vh] bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in slide-in-from-bottom-full duration-300">
            <button onClick={closeModal} className="absolute top-4 right-4 z-[310] p-2 bg-black/5 rounded-full"><X size={20} /></button>

            <div className="w-full md:w-1/2 h-[35vh] md:h-auto bg-gray-100 relative">
              <SafeImage src={selectedProduct.images[activeImageKey]} className="w-full h-full object-cover" alt="Produto" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {(Object.keys(selectedProduct.images) as Array<'front' | 'side' | 'back'>).map((key) => (
                  selectedProduct.images[key] && (
                    <button key={key} onClick={() => setActiveImageKey(key)} className={`w-10 h-10 rounded-lg border-2 bg-white overflow-hidden ${activeImageKey === key ? 'border-orange-500 scale-105' : 'border-transparent opacity-50'}`}>
                      <SafeImage src={selectedProduct.images[key]} className="w-full h-full object-cover" alt="Thumb" />
                    </button>
                  )
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col bg-white">
              <h2 className="text-2xl md:text-4xl font-black text-black mb-2 tracking-tighter uppercase italic leading-none">{selectedProduct.name}</h2>
              <p className="text-gray-400 text-xs italic mb-4 border-l-4 border-orange-500 pl-3">{selectedProduct.description}</p>
              
              <div className="mt-auto bg-gray-50 p-6 rounded-[2rem] border-2 border-white shadow-inner">
                <div className="mb-4">
                  <p className="text-[10px] text-gray-400 line-through font-black uppercase">De: {formatPrice(selectedProduct.finalPrice * 1.3)}</p>
                  <h3 className="text-3xl md:text-5xl font-black text-black tracking-tighter">{formatPrice(selectedProduct.finalPrice)}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`https://wa.me/5511960817540?text=Olá WB! Tenho interesse no ${selectedProduct.name}`} target="_blank" className="flex items-center justify-center gap-3 bg-green-600 text-white font-black py-4 rounded-xl shadow-lg text-xs uppercase"><MessageCircle size={18} /> Comprar via WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating CTA */}
      <a href="https://wa.me/5511960817540" target="_blank" className="fixed bottom-6 right-6 z-[150] bg-green-600 text-white p-4 rounded-full shadow-2xl animate-bounce border-2 border-white"><MessageCircle size={32} strokeWidth={3} /></a>

      <footer className="bg-black text-white py-12 text-center border-t-4 border-orange-600">
        <h2 className="text-2xl font-black italic mb-2 opacity-30 uppercase">WBimportadoss</h2>
        <p className="text-[8px] text-gray-600 uppercase font-black tracking-widest">© 2022 WBIMPORTADOSS - PRODUTOS ORIGINAIS</p>
      </footer>
    </div>
  );
}
