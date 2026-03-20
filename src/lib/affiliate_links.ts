export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  affiliateUrl: string;
  store: string;
  category: "tech" | "books" | "stationery";
}

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Zaino Scuola Seven Reversibile",
    description: "Lo zaino più amato dagli studenti italiani: ergonomico, capiente e resistente. Perfetto per portare libri, tablet e tutto il necessario.",
    price: "€ 59,90",
    imageUrl: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=300&fit=crop",
    affiliateUrl: "https://www.amazon.it/s?k=zaino+scuola+seven&tag=geniotto-21",
    store: "Amazon",
    category: "stationery",
  },
  {
    id: "2",
    name: "iPad 10ª Generazione",
    description: "Il tablet perfetto per studiare, prendere appunti con Apple Pencil e usare Geniotto ovunque. Schermo da 10.9\", leggerissimo.",
    price: "€ 399,00",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    affiliateUrl: "https://www.amazon.it/s?k=ipad+10+generazione&tag=geniotto-21",
    store: "Amazon",
    category: "tech",
  },
  {
    id: "3",
    name: "Dizionario Italiano Zingarelli",
    description: "Il dizionario della lingua italiana più completo e aggiornato. Indispensabile per compiti, temi e la verifica di italiano.",
    price: "€ 39,90",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    affiliateUrl: "https://www.amazon.it/s?k=dizionario+zingarelli+italiano&tag=geniotto-21",
    store: "Amazon",
    category: "books",
  },
  {
    id: "4",
    name: "Stabilo Boss Evidenziatori Set",
    description: "Il set di evidenziatori più famoso al mondo! 8 colori per organizzare gli appunti e studiare in modo colorato e divertente.",
    price: "€ 8,50",
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    affiliateUrl: "https://www.amazon.it/s?k=stabilo+boss+set+evidenziatori&tag=geniotto-21",
    store: "Amazon",
    category: "stationery",
  },
  {
    id: "5",
    name: "Cuffie Bluetooth Sony WH-1000XM4",
    description: "Studia senza distrazioni con la cancellazione attiva del rumore. Batteria da 30 ore, audio premium. Il compagno ideale per concentrarsi.",
    price: "€ 249,00",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    affiliateUrl: "https://www.amazon.it/s?k=sony+wh1000xm4+cuffie&tag=geniotto-21",
    store: "Amazon",
    category: "tech",
  },
  {
    id: "6",
    name: "Agenda Scolastica Legami",
    description: "L'agenda scuola più bella d'Italia! Organizza compiti, verifiche e impegni con stile. Disponibile in tantissimi colori e grafiche.",
    price: "€ 14,90",
    imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
    affiliateUrl: "https://www.amazon.it/s?k=agenda+scolastica+legami&tag=geniotto-21",
    store: "Amazon",
    category: "stationery",
  },
];
