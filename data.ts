import { Product } from './types';

const createId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

/**
 * Mapeamento de imagens reais.
 * Utilizamos o formato 'lh3.googleusercontent.com/d/[ID]' para garantir 
 * que as imagens do Google Drive carreguem sem bloqueios de visualização.
 */
const realPhotos = {
  // iPhone 17 Pro Max
  i17pm: 'https://lh3.googleusercontent.com/d/1MhWz_I6HiIuF9hOO06u3nctx_fdAGJYK',
  // iPhone 17 256GB
  i17: 'https://lh3.googleusercontent.com/d/1ESnvm-3_nl1FD4I7jfGzhrNeOBVbqIZ1',
  // iPhone 16 Pro Max
  i16pm: 'https://lh3.googleusercontent.com/d/1yDHKkTUWjZh7vQ2bC-f0XjO7pYzF4CMa',
  // iPhone 16 Pro
  i16p: 'https://lh3.googleusercontent.com/d/1yDHKkTUWjZh7vQ2bC-f0XjO7pYzF4CMa',
  // iPhone 16 Plus
  i16plus: 'https://lh3.googleusercontent.com/d/1UEwdqE797C-VDBBfUYHAFGzdF0q72DWj',
  // iPhone 16
  i16: 'https://lh3.googleusercontent.com/d/10CLPd_wmI55yeJd3fflZTL01uxUjI1x-',
  i15: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
  // iPhone 14
  i14: 'https://lh3.googleusercontent.com/d/1wWs_YBvrVoKSRk_BKJUf8lD7Ne75i6G7',
  // iPhone 13
  i13: 'https://lh3.googleusercontent.com/d/1uyNK_98zQNJNGVJmxB5sWTV03zxEdYS9',
  // Xiaomi Redmi 13C
  r13c: 'https://lh3.googleusercontent.com/d/13XZ9pMHPzok82dxquFS4LO6BMP32eQTd',
  // Xiaomi Redmi 14C
  r14c: 'https://lh3.googleusercontent.com/d/1votM_Ai_p2lz5T2ofGfX-QUoWVEdiaKU',
  // Xiaomi Redmi Note 14
  rn14: 'https://lh3.googleusercontent.com/d/1KZsWLDQ8aWhYWfMWzfRHt-1t2lu8mSON',
  // Xiaomi POCO X7
  px7: 'https://lh3.googleusercontent.com/d/10gyO3ZHtCaozc_yEPxdl4T7DMoeWX3sJ',
  // Xiaomi POCO X7 Pro
  px7p: 'https://lh3.googleusercontent.com/d/1kNJdx3jGCSVKqU0YR2IhsVMPV3kvr8VA',
};

// Placeholder para produtos sem foto real específica
const getRetailPlaceholder = (slug: string) => ({
  front: `https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800&sig=${slug}f`,
  side: `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800&sig=${slug}s`,
  back: `https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800&sig=${slug}b`,
});

const getRandomQty = () => Math.floor(Math.random() * 5) + 1;

export const products: Product[] = [
  // --- IPHONES ---
  {
    id: createId('iPhone 17 Pro Max 256GB'),
    name: 'iPhone 17 Pro Max 256GB',
    category: 'iphone',
    basePrice: 9000,
    finalPrice: 9500,
    colors: ['Laranja', 'Azul', 'Silver'],
    specs: ['256GB', 'Chip A19 Pro', 'Titânio Aeroespacial', 'Câmera Tripla 48MP'],
    description: 'A revolução tecnológica no seu bolso. O design exclusivo em titânio laranja é a escolha dos líderes.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 Pro Max 512GB'),
    name: 'iPhone 17 Pro Max 512GB',
    category: 'iphone',
    basePrice: 10400,
    finalPrice: 10900,
    colors: ['Laranja'],
    specs: ['512GB', 'Lente Periscópica', 'Bateria Pro+', 'IA Nativa'],
    description: 'Espaço ilimitado para sua criatividade. Capture em ProRES 8K sem se preocupar com memória.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 Pro Max 1TB'),
    name: 'iPhone 17 Pro Max 1TB',
    category: 'iphone',
    basePrice: 11600,
    finalPrice: 12100,
    colors: ['Laranja'],
    specs: ['1 Terabyte', 'Máxima Performance', 'Capa Couro Inclusa'],
    description: 'O smartphone mais potente já criado. 1TB de armazenamento para quem exige o impossível.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 Pro 256GB'),
    name: 'iPhone 17 Pro 256GB',
    category: 'iphone',
    basePrice: 8350,
    finalPrice: 8850,
    colors: ['Laranja', 'Azul', 'Silver'],
    specs: ['256GB', 'Tela ProMotion 120Hz', 'Design Ergonômico'],
    description: 'Poder Pro em um corpo compacto e elegante. O acabamento em titânio garante durabilidade extrema.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 256GB'),
    name: 'iPhone 17 256GB',
    category: 'iphone',
    basePrice: 6100,
    finalPrice: 6600,
    colors: ['Azul', 'Verde', 'Lilás', 'Preto', 'Branco'],
    specs: ['256GB', 'Cores Vibrantes', 'Dynamic Island 2.0'],
    description: 'Estilo e performance em harmonia. O iPhone 17 é a escolha inteligente para quem quer o novo.',
    images: { front: realPhotos.i17, side: realPhotos.i17, back: realPhotos.i17 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 Pro Max 512GB'),
    name: 'iPhone 16 Pro Max 512GB',
    category: 'iphone',
    basePrice: 8500,
    finalPrice: 9000,
    colors: ['Preto'],
    specs: ['512GB', 'Apple Intelligence', 'Titânio Negro'],
    description: 'A geração que mudou a história com IA nativa. Potência absoluta em cada pixel.',
    images: { front: realPhotos.i16pm, side: realPhotos.i16pm, back: realPhotos.i16pm },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 Pro 128GB'),
    name: 'iPhone 16 Pro 128GB',
    category: 'iphone',
    basePrice: 6100,
    finalPrice: 6600,
    colors: ['Branco'],
    specs: ['128GB', 'Foco Automático Laser', 'Chip A18 Pro'],
    description: 'A fotografia profissional elevada ao máximo. O iPhone 16 Pro é a ferramenta do artista moderno.',
    images: { front: realPhotos.i16p, side: realPhotos.i16p, back: realPhotos.i16p },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 Plus 128GB'),
    name: 'iPhone 16 Plus 128GB',
    category: 'iphone',
    basePrice: 5100,
    finalPrice: 5600,
    colors: ['Branco', 'Preto'],
    specs: ['128GB', 'Tela Gigante 6.7"', 'Bateria Imbatível'],
    description: 'Imersão total para seus vídeos e jogos. A maior tela pelo melhor custo-benefício.',
    images: { front: realPhotos.i16plus, side: realPhotos.i16plus, back: realPhotos.i16plus },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 128GB'),
    name: 'iPhone 16 128GB',
    category: 'iphone',
    basePrice: 4700,
    finalPrice: 5200,
    colors: ['Rosé', 'Preto', 'Verde', 'Branco'],
    specs: ['128GB', 'Botão de Ação', 'Cores Mate'],
    description: 'Inovação acessível. O ponto de entrada para a tecnologia mais moderna da Apple.',
    images: { front: realPhotos.i16, side: realPhotos.i16, back: realPhotos.i16 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 15 128GB'),
    name: 'iPhone 15 128GB',
    category: 'iphone',
    basePrice: 4000,
    finalPrice: 4500,
    colors: ['Rosé'],
    specs: ['128GB', 'USB-C', 'Dynamic Island'],
    description: 'Modernidade e praticidade com conexão universal USB-C. Um campeão de vendas na WB.',
    images: { front: realPhotos.i15, side: realPhotos.i15, back: realPhotos.i15 },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 14 128GB'),
    name: 'iPhone 14 128GB',
    category: 'iphone',
    basePrice: 3500,
    finalPrice: 4000,
    colors: ['Branco', 'Preto'],
    specs: ['128GB', 'Chip A15 Bionic', 'Super Retina XDR', 'Cinematográfico 4K'],
    description: 'Desempenho duradouro e fotos incríveis. O iPhone 14 é ideal para quem busca tecnologia e estilo.',
    images: { front: realPhotos.i14, side: realPhotos.i14, back: realPhotos.i14 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 13 128GB'),
    name: 'iPhone 13 128GB',
    category: 'iphone',
    basePrice: 3150,
    finalPrice: 3650,
    colors: ['Branco', 'Azul', 'Preto'],
    specs: ['128GB', 'Chip A15 Bionic', 'Excelente Câmera'],
    description: 'O clássico que nunca sai de moda. O melhor custo-benefício para entrar no mundo Apple.',
    images: { front: realPhotos.i13, side: realPhotos.i13, back: realPhotos.i13 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },

  // --- XIAOMI (E REALME) ---
  {
    id: createId('Redmi A5 3/64GB'),
    name: 'Redmi A5 3/64GB',
    category: 'xiaomi',
    basePrice: 470,
    finalPrice: 970,
    colors: ['Gold', 'Azul', 'Preto'],
    specs: ['3/64GB', 'Bateria 5000mAh', 'Tela 6.5"'],
    description: 'Simplicidade e autonomia. O celular que te acompanha o dia todo sem carregar.',
    images: getRetailPlaceholder('ra5-364'),
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi A5 4/128GB'),
    name: 'Redmi A5 4/128GB',
    category: 'xiaomi',
    basePrice: 560,
    finalPrice: 1060,
    colors: ['Preto', 'Azul'],
    specs: ['4/128GB', 'Design Slim', 'Câmera IA'],
    description: 'Mais espaço para seu dia a dia. Desempenho confiável com selo de originalidade Xiaomi.',
    images: getRetailPlaceholder('ra5-4128'),
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi 13C 8/256GB'),
    name: 'Redmi 13C 8/256GB',
    category: 'xiaomi',
    basePrice: 600,
    finalPrice: 1100,
    colors: ['Preto', 'Azul', 'Verde'],
    specs: ['8/256GB', 'Tela 90Hz', 'NFC'],
    description: 'Muita memória por um preço que você não vai acreditar. Fluidez e espaço de sobra.',
    images: { front: realPhotos.r13c, side: realPhotos.r13c, back: realPhotos.r13c },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi 14C 8/256GB'),
    name: 'Redmi 14C 8/256GB',
    category: 'xiaomi',
    basePrice: 650,
    finalPrice: 1150,
    colors: ['Preto', 'Roxo', 'Azul', 'Verde'],
    specs: ['8/256GB', 'RAM Expansível', 'Hardware Premium'],
    description: 'A evolução da linha Redmi. Estilo refinado e hardware potente para multitarefa.',
    images: { front: realPhotos.r14c, side: realPhotos.r14c, back: realPhotos.r14c },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi Note 14 8/256GB'),
    name: 'Redmi Note 14 8/256GB (4G)',
    category: 'xiaomi',
    basePrice: 1070,
    finalPrice: 1570,
    colors: ['Verde', 'Azul', 'Preto'],
    specs: ['8/256GB', 'Tela AMOLED', 'Câmera 108MP'],
    description: 'Qualidade fotográfica de ponta. O Redmi Note 14 redefine o que é um smartphone intermediário premium.',
    images: { front: realPhotos.rn14, side: realPhotos.rn14, back: realPhotos.rn14 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Poco X7 Pro 12/512GB'),
    name: 'Poco X7 Pro 12/512GB 5G',
    category: 'xiaomi',
    basePrice: 2160,
    finalPrice: 2660,
    colors: ['Preto', 'Verde'],
    specs: ['12/512GB', 'Snapdragon Gamer', 'Tela AMOLED 120Hz', '5G Turbo'],
    description: 'Performance bruta para gamers. Sinta a velocidade do 5G com o hardware mais potente da POCO.',
    images: { front: realPhotos.px7p, side: realPhotos.px7p, back: realPhotos.px7p },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Poco X7 12/512GB'),
    name: 'Poco X7 12/512GB 5G',
    category: 'xiaomi',
    basePrice: 1720,
    finalPrice: 2220,
    colors: ['Preto', 'Verde', 'Silver'],
    specs: ['12/512GB', 'Processador Dimensity', 'Carga de 67W'],
    description: 'Equilíbrio e velocidade. O Poco X7 é o dispositivo ideal para quem busca performance sem limites.',
    images: { front: realPhotos.px7, side: realPhotos.px7, back: realPhotos.px7 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Poco C85 8/256GB'),
    name: 'Poco C85 8/256GB',
    category: 'xiaomi',
    basePrice: 795,
    finalPrice: 1295,
    colors: ['Preto', 'Roxo', 'Verde'],
    specs: ['8/256GB', 'Câmera Dupla IA', 'Bateria Gigante'],
    description: 'O equilíbrio perfeito entre preço e poder. Grande tela e bateria infinita para seu lazer.',
    images: getRetailPlaceholder('pc85'),
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Realme Note 60X 4/128GB'),
    name: 'Realme Note 60X 4/128GB (ANATEL)',
    category: 'xiaomi',
    basePrice: 550,
    finalPrice: 1050,
    colors: ['Preto', 'Verde'],
    specs: ['4/128GB', 'Selo ANATEL', '1 Ano de Garantia'],
    description: 'Segurança absoluta para sua compra. Homologado pela Anatel com garantia oficial Realme.',
    images: getRetailPlaceholder('rn60x'),
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Realme Note 60X 3/64GB'),
    name: 'Realme Note 60X 3/64GB (ANATEL)',
    category: 'xiaomi',
    basePrice: 450,
    finalPrice: 950,
    colors: ['Preto', 'Verde'],
    specs: ['3/64GB', 'Certificado Anatel', 'Resistente'],
    description: 'O melhor preço para um aparelho com garantia nacional. Confiabilidade e economia.',
    images: getRetailPlaceholder('rn60x364'),
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  }
];