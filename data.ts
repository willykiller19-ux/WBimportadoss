import { Product } from './types';

const createId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

/**
 * Mapeamento de imagens reais.
 */
const realPhotos = {
  i17pm: 'https://lh3.googleusercontent.com/d/1MhWz_I6HiIuF9hOO06u3nctx_fdAGJYK',
  i17: 'https://lh3.googleusercontent.com/d/1ESnvm-3_nl1FD4I7jfGzhrNeOBVbqIZ1',
  i16pm: 'https://lh3.googleusercontent.com/d/1yDHKkTUWjZh7vQ2bC-f0XjO7pYzF4CMa',
  i16p: 'https://lh3.googleusercontent.com/d/1yDHKkTUWjZh7vQ2bC-f0XjO7pYzF4CMa',
  i16plus: 'https://lh3.googleusercontent.com/d/1UEwdqE797C-VDBBfUYHAFGzdF0q72DWj',
  i16: 'https://lh3.googleusercontent.com/d/10CLPd_wmI55yeJd3fflZTL01uxUjI1x-',
  i15: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
  i14: 'https://lh3.googleusercontent.com/d/1wWs_YBvrVoKSRk_BKJUf8lD7Ne75i6G7',
  i13: 'https://lh3.googleusercontent.com/d/1uyNK_98zQNJNGVJmxB5sWTV03zxEdYS9',
  r13c: 'https://lh3.googleusercontent.com/d/13XZ9pMHPzok82dxquFS4LO6BMP32eQTd',
  r14c: 'https://lh3.googleusercontent.com/d/1votM_Ai_p2lz5T2ofGfX-QUoWVEdiaKU',
  rn14: 'https://lh3.googleusercontent.com/d/1KZsWLDQ8aWhYWfMWzfRHt-1t2lu8mSON',
  px7: 'https://lh3.googleusercontent.com/d/10gyO3ZHtCaozc_yEPxdl4T7DMoeWX3sJ',
  px7p: 'https://lh3.googleusercontent.com/d/1kNJdx3jGCSVKqU0YR2IhsVMPV3kvr8VA',
  ps5_1: 'https://lh3.googleusercontent.com/d/1RMOkaDblk14XLsBy-Wh-4urC7dnNuipS',
  ps5_2: 'https://lh3.googleusercontent.com/d/1Watc7gocMJzd4eZpBVRjVz2QZLnh5fIj',
  buds: 'https://lh3.googleusercontent.com/d/1OMsUMqnGNwCoyETf1bnyrd2KavMzkqbN',
  sw11: 'https://lh3.googleusercontent.com/d/1KaKFWXYiQ8RyxyTMk9emWY-XCGkfAElI',
  swProX1: 'https://lh3.googleusercontent.com/d/1LaP2V35J12a3OvLypP2np30_dDMT-Swb',
  swProX2: 'https://lh3.googleusercontent.com/d/1rLBYoeKJ18n37C-BLqRgR2ePAPEPlNtb',
  pod: 'https://lh3.googleusercontent.com/d/1vfvSTRN7rcIDIs4eIpDSv3A71JauRSNG',
  ipad: 'https://lh3.googleusercontent.com/d/163Ea7ZUDhk5WWdBISXafcBBWSdXeBqdz',
  rp2: 'https://lh3.googleusercontent.com/d/1_tBCsVE_1b8BKHl_Q-vRoVd45Ek7uJSN',
  x9ba: 'https://lh3.googleusercontent.com/d/156LTicJcFCwjGuAr1PYOHar9wvZgGtRX',
  fam1: 'https://lh3.googleusercontent.com/d/1-UBPI0EQPWhY-8ZescZffgZugGkARTFW'
};

const getRandomQty = () => Math.floor(Math.random() * 5) + 1;

export const products: Product[] = [
  // --- PRIORIDADE MÁXIMA (DEMAIS PRODUTOS) ---
  {
    id: createId('PlayStation 5 Slim Digital 825GB'),
    name: 'PLAYSTATION 5 SLIM',
    category: 'demais',
    basePrice: 3000,
    finalPrice: 3400,
    colors: ['Branco/Preto'],
    specs: ['825GB SSD', 'Modelo Slim', 'Mídia Digital', 'Resolução 4K HDR'],
    description: 'A nova geração de jogos com carregamento ultrarrápido e design compacto.',
    images: { front: realPhotos.ps5_1, side: realPhotos.ps5_2, back: realPhotos.ps5_1 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },

  // --- APPLE (PREÇOS ATUALIZADOS) ---
  {
    id: createId('iPhone 17 Pro Max 256GB'),
    name: 'iPhone 17 Pro Max 256GB',
    category: 'iphone',
    basePrice: 9000,
    finalPrice: 9450,
    colors: ['Laranja', 'Azul', 'Silver'],
    specs: ['256GB', 'Chip A19 Pro'],
    description: 'Laranja e Azul: R$ 9.450 | Silver: R$ 9.700.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 Pro Max 512GB'),
    name: 'iPhone 17 Pro Max 512GB',
    category: 'iphone',
    basePrice: 10500,
    finalPrice: 11000,
    colors: ['Laranja'],
    specs: ['512GB', 'Chip A19 Pro'],
    description: 'Máximo armazenamento na cor exclusiva Laranja.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 Pro Max 1TB'),
    name: 'iPhone 17 Pro Max 1TB',
    category: 'iphone',
    basePrice: 12000,
    finalPrice: 12500,
    colors: ['Laranja', 'Azul', 'Silver'],
    specs: ['1TB Storage'],
    description: 'Laranja: R$ 12.500 | Azul: R$ 12.600 | Silver: R$ 12.700.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 Pro 256GB'),
    name: 'iPhone 17 Pro 256GB',
    category: 'iphone',
    basePrice: 8000,
    finalPrice: 8450,
    colors: ['Laranja', 'Azul', 'Silver'],
    specs: ['256GB', 'Pro Camera System'],
    description: 'Laranja: R$ 8.450 | Azul: R$ 8.650 | Silver: R$ 8.600.',
    images: { front: realPhotos.i17pm, side: realPhotos.i17pm, back: realPhotos.i17pm },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 17 256GB'),
    name: 'iPhone 17 256GB',
    category: 'iphone',
    basePrice: 6000,
    finalPrice: 6300,
    colors: ['Azul', 'Verde', 'Lilás', 'Branco', 'Preto'],
    specs: ['256GB'],
    description: 'Azul/Verde: R$ 6.300 | Lilás/Branco/Preto: R$ 6.400.',
    images: { front: realPhotos.i17, side: realPhotos.i17, back: realPhotos.i17 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 Pro Max 512GB'),
    name: 'iPhone 16 Pro Max 512GB',
    category: 'iphone',
    basePrice: 8300,
    finalPrice: 8700,
    colors: ['Preto', 'Silver', 'Dourado'],
    specs: ['512GB'],
    description: 'Preto/Natural: R$ 8.700 | Desert: R$ 8.750.',
    images: { front: realPhotos.i16pm, side: realPhotos.i16pm, back: realPhotos.i16pm },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 Pro 128GB'),
    name: 'iPhone 16 Pro 128GB',
    category: 'iphone',
    basePrice: 6000,
    finalPrice: 6450,
    colors: ['Branco'],
    specs: ['128GB'],
    description: 'Performance Pro em tamanho ideal.',
    images: { front: realPhotos.i16p, side: realPhotos.i16p, back: realPhotos.i16p },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 Plus 128GB'),
    name: 'iPhone 16 Plus 128GB',
    category: 'iphone',
    basePrice: 5000,
    finalPrice: 5350,
    colors: ['Preto', 'Branco'],
    specs: ['128GB', 'Tela 6.7"'],
    description: 'Preto: R$ 5.350 | Branco: R$ 5.400.',
    images: { front: realPhotos.i16plus, side: realPhotos.i16plus, back: realPhotos.i16plus },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 128GB'),
    name: 'iPhone 16 128GB',
    category: 'iphone',
    basePrice: 4800,
    finalPrice: 5200,
    colors: ['Rosé', 'Preto'],
    specs: ['128GB'],
    description: 'Rosé: R$ 5.200 | Preto: R$ 5.250.',
    images: { front: realPhotos.i16, side: realPhotos.i16, back: realPhotos.i16 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 16 256GB'),
    name: 'iPhone 16 256GB',
    category: 'iphone',
    basePrice: 5400,
    finalPrice: 5750,
    colors: ['Rosé', 'Branco', 'Preto'],
    specs: ['256GB'],
    description: 'Rosé: R$ 5.750 | Branco/Preto: R$ 5.800.',
    images: { front: realPhotos.i16, side: realPhotos.i16, back: realPhotos.i16 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 15 128GB'),
    name: 'iPhone 15 128GB',
    category: 'iphone',
    basePrice: 4200,
    finalPrice: 4600,
    colors: ['Azul'],
    specs: ['128GB', 'USB-C'],
    description: 'Excelente custo-benefício com porta USB-C.',
    images: { front: realPhotos.i15, side: realPhotos.i15, back: realPhotos.i15 },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPhone 13 128GB'),
    name: 'iPhone 13 128GB',
    category: 'iphone',
    basePrice: 3400,
    finalPrice: 3800,
    colors: ['Branco'],
    specs: ['128GB'],
    description: 'O clássico duradouro da Apple.',
    images: { front: realPhotos.i13, side: realPhotos.i13, back: realPhotos.i13 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('iPad 11 128GB'),
    name: 'IPAD 11 128GB',
    category: 'iphone',
    basePrice: 2800,
    finalPrice: 3050,
    colors: ['Azul', 'Silver'],
    specs: ['128GB'],
    description: 'O tablet mais versátil do mercado.',
    images: { front: realPhotos.ipad, side: realPhotos.ipad, back: realPhotos.ipad },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },

  // --- XIAOMI (RESTAURADOS) ---
  {
    id: createId('Redmi Pad 2 8/256GB'),
    name: 'REDMI PAD 2 8/256GB',
    category: 'xiaomi',
    basePrice: 1400,
    finalPrice: 1650,
    colors: ['Azul', 'Prata'],
    specs: ['8GB RAM', '256GB Armazenamento'],
    description: 'Poderoso tablet para multimídia e trabalho.',
    images: { front: realPhotos.rp2, side: realPhotos.rp2, back: realPhotos.rp2 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi 13C 8/256GB'),
    name: 'REDMI 13C 8/256GB',
    category: 'xiaomi',
    basePrice: 900,
    finalPrice: 1100,
    colors: ['Preto', 'Azul', 'Verde'],
    specs: ['8GB RAM', '256GB Storage'],
    description: 'O rei do custo-benefício.',
    images: { front: realPhotos.r13c, side: realPhotos.r13c, back: realPhotos.r13c },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Poco X7 Pro 12/512GB'),
    name: 'POCO X7 PRO 12/512GB 5G',
    category: 'xiaomi',
    basePrice: 2300,
    finalPrice: 2660,
    colors: ['Preto', 'Verde'],
    specs: ['12GB RAM', '512GB Storage', '5G'],
    description: 'Performance extrema para jogos.',
    images: { front: realPhotos.px7p, side: realPhotos.px7p, back: realPhotos.px7p },
    stockStatus: 'Last Units',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi Note 14 Pro 12/512GB'),
    name: 'REDMI NOTE 14 PRO 5G',
    category: 'xiaomi',
    basePrice: 2000,
    finalPrice: 2350,
    colors: ['Preto', 'Azul'],
    specs: ['12GB RAM', '512GB Storage'],
    description: 'Câmera e tela de nível superior.',
    images: { front: realPhotos.rn14, side: realPhotos.rn14, back: realPhotos.rn14 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi 14C 8/256GB'),
    name: 'REDMI 14C 8/256GB',
    category: 'xiaomi',
    basePrice: 1000,
    finalPrice: 1250,
    colors: ['Preto', 'Verde'],
    specs: ['8GB RAM', '256GB Storage'],
    description: 'Design premium em um modelo de entrada.',
    images: { front: realPhotos.r14c, side: realPhotos.r14c, back: realPhotos.r14c },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },

  // --- DEMAIS PRODUTOS (RESTAURADOS) ---
  {
    id: createId('Caixa de Som FAM'),
    name: 'CAIXA DE SOM FAM',
    category: 'demais',
    basePrice: 150,
    finalPrice: 200,
    colors: ['Preto', 'Rosa', 'Azul'],
    specs: ['Bluetooth 5.1'],
    description: 'Potência e nitidez sonora em qualquer lugar.',
    images: { front: realPhotos.fam1, side: realPhotos.fam1, back: realPhotos.fam1 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Xiaomi 9 Band Active'),
    name: 'XIAOMI 9 BAND ACTIVE',
    category: 'demais',
    basePrice: 180,
    finalPrice: 250,
    colors: ['Preto', 'Rosa'],
    specs: ['Monitor SpO2'],
    description: 'Sua saúde monitorada 24 horas por dia.',
    images: { front: realPhotos.x9ba, side: realPhotos.x9ba, back: realPhotos.x9ba },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Microwear Pro Series X'),
    name: 'MICROWEAR PRO SERIES X',
    category: 'demais',
    basePrice: 190,
    finalPrice: 250,
    colors: ['Preto', 'Prata'],
    specs: ['Série Premium'],
    description: 'O smartwatch definitivo para quem busca estilo.',
    images: { front: realPhotos.swProX1, side: realPhotos.swProX2, back: realPhotos.swProX1 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Redmi Buds 4 Lite'),
    name: 'REDMI BUDS 4 LITE',
    category: 'demais',
    basePrice: 100,
    finalPrice: 150,
    colors: ['Branco'],
    specs: ['Até 20h Bateria'],
    description: 'Som limpo e conexão estável.',
    images: { front: realPhotos.buds, side: realPhotos.buds, back: realPhotos.buds },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  },
  {
    id: createId('Microwear Mini 11 Ultra'),
    name: 'MICROWEAR MINI 11 ULTRA',
    category: 'demais',
    basePrice: 190,
    finalPrice: 250,
    colors: ['Preto', 'Prata', 'Rosé'],
    specs: ['Tela AMOLED'],
    description: 'Tecnologia de ponta em formato compacto.',
    images: { front: realPhotos.sw11, side: realPhotos.sw11, back: realPhotos.sw11 },
    stockStatus: 'In Stock',
    availableQuantity: getRandomQty()
  }
];
