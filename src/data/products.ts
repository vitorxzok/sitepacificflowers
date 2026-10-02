export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  // Envelopes
  { id: "e1", name: "Envelope Kraft 162x229 - Caixa c/ 250", price: 27.53, category: "Envelopes Kraft", image: "https://static.wixstatic.com/media/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg" },
  { id: "e2", name: "Envelope Kraft 185x248 - Caixa c/ 250", price: 32.00, category: "Envelopes Kraft", image: "https://static.wixstatic.com/media/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg" },
  { id: "e3", name: "Envelope Kraft 200x280 - Caixa c/ 250", price: 36.00, category: "Envelopes Kraft", image: "https://static.wixstatic.com/media/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg" },
  { id: "e4", name: "Envelope Kraft 240x340 - Caixa c/ 250", price: 40.00, category: "Envelopes Kraft", image: "https://static.wixstatic.com/media/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_19b2dd1d5ab147d6882ecebbefb01929~mv2.jpg" },
  
  // Jogos e Brinquedos
  { id: "j1", name: "Jogo de Damas 30x40", price: 22.00, category: "Jogos e Brinquedos", image: "https://static.wixstatic.com/media/fd5b1a_c03ab712343c43fab88f7d946ecca353~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_c03ab712343c43fab88f7d946ecca353~mv2.jpg" },
  { id: "j2", name: "Jogo da Memória 20x30", price: 22.00, category: "Jogos e Brinquedos", image: "https://static.wixstatic.com/media/fd5b1a_c03ab712343c43fab88f7d946ecca353~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_c03ab712343c43fab88f7d946ecca353~mv2.jpg" },
  { id: "j3", name: "Mercado Imobiliário 30x40", price: 37.00, category: "Jogos e Brinquedos", image: "https://static.wixstatic.com/media/fd5b1a_c03ab712343c43fab88f7d946ecca353~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_c03ab712343c43fab88f7d946ecca353~mv2.jpg" },
  { id: "j4", name: "Dinheirinho Educativo 20x30 - 12un", price: 20.00, category: "Jogos e Brinquedos", image: "https://static.wixstatic.com/media/fd5b1a_4f96918b57d7468ba9b92aa8f0982681~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_4f96918b57d7468ba9b92aa8f0982681~mv2.jpg" },
  
  // Giz de Cera e Colorir
  { id: "g1", name: "Super Gizão de Cera c/ 12", price: 21.00, category: "Giz de Cera e Colorir", image: "https://static.wixstatic.com/media/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png" },
  { id: "g2", name: "Meu Primeiro Giz c/ 6", price: 12.00, category: "Giz de Cera e Colorir", image: "https://static.wixstatic.com/media/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png" },
  { id: "g3", name: "Cartinhas para Colorir 20x30", price: 15.00, category: "Giz de Cera e Colorir", image: "https://static.wixstatic.com/media/fd5b1a_e17672cca8074edf858ce73131536041~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_e17672cca8074edf858ce73131536041~mv2.jpg" },
  
  // Placas Indicativas
  { id: "p1", name: "Placa: Sorria Você Está Sendo Filmado", price: 27.00, category: "Placas Indicativas", image: "https://static.wixstatic.com/media/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg" },
  { id: "p2", name: "Placa: Área Protegida 24 Horas", price: 27.00, category: "Placas Indicativas", image: "https://static.wixstatic.com/media/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg" },
  { id: "p3", name: "Placa: Perigo Alta Tensão", price: 27.00, category: "Placas Indicativas", image: "https://static.wixstatic.com/media/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg" },
  { id: "p4", name: "Placa: Cuidado Cão Bravo", price: 27.00, category: "Placas Indicativas", image: "https://static.wixstatic.com/media/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg" },
  { id: "p5", name: "Placa: Saída de Emergência", price: 27.00, category: "Placas Indicativas", image: "https://static.wixstatic.com/media/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_63bc326f02ac4011b0e0417bf6216961~mv2.jpeg" },
  
  // Ofertas e Cartazes
  { id: "c1", name: "Splash P M G Granel", price: 15.00, category: "Ofertas e Splash", image: "https://static.wixstatic.com/media/fd5b1a_2db5673ee25a45c29f5e4eba583c2b40~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_2db5673ee25a45c29f5e4eba583c2b40~mv2.jpeg" },
  { id: "c2", name: "Cartaz Oferta 20x30 - 12 un", price: 8.00, category: "Ofertas e Splash", image: "https://static.wixstatic.com/media/fd5b1a_2db5673ee25a45c29f5e4eba583c2b40~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_2db5673ee25a45c29f5e4eba583c2b40~mv2.jpeg" },
  { id: "c3", name: "Cartaz Oferta 43x63 Granel 50 un", price: 35.00, category: "Ofertas e Splash", image: "https://static.wixstatic.com/media/fd5b1a_654c0e0114254c2f8e2ebcc9e994f7aa~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/fd5b1a_654c0e0114254c2f8e2ebcc9e994f7aa~mv2.jpeg" },
  
  // Cadernos
  { id: "cd1", name: "Caderno 14x20cm Capa Flexível 48fls", price: 18.00, category: "Cadernos", image: "https://static.wixstatic.com/media/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png" },
  { id: "cd2", name: "Caderno 20x27cm 96fls", price: 32.00, category: "Cadernos", image: "https://static.wixstatic.com/media/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fd5b1a_b1fe16aa32604bb99bde37ab3cdb570f~mv2.png" }
];
