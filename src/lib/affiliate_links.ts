export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    affiliateUrl: string;
    category: 'tech' | 'stationery' | 'books';
    store: 'Amazon' | 'AliExpress' | 'Other';
}

export const RECOMMENDED_PRODUCTS: Product[] = [
    {
        id: 'tablet-1',
        name: 'Tablet Economico 10"',
        description: 'Perfetto per leggere i compiti e guardare le lezioni su Geniotto.',
        price: '129.00€',
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
        affiliateUrl: 'https://amzn.to/example-tablet',
        category: 'tech',
        store: 'Amazon'
    },
    {
        id: 'notebk-1',
        name: 'Quaderno Smart Digitale',
        description: 'Scrivi, scansiona e cancella. Sincronizzati con il cloud.',
        price: '34.90€',
        imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80',
        affiliateUrl: 'https://s.click.aliexpress.com/e/example-notebook',
        category: 'stationery',
        store: 'AliExpress'
    },
    {
        id: 'lamp-1',
        name: 'Lampada Studio LED',
        description: 'Luce riposante per le tue sessioni di studio notturno.',
        price: '24.99€',
        imageUrl: 'https://images.unsplash.com/photo-1534073828943-f801091bb270?w=400&q=80',
        affiliateUrl: 'https://amzn.to/example-lamp',
        category: 'tech',
        store: 'Amazon'
    },
    {
        id: 'temu-gadget-1',
        name: 'Set Penne Colorate Gel',
        description: '48 colori per rendere i tuoi appunti bellissimi.',
        price: '8.50€',
        imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80',
        affiliateUrl: 'https://temu.to/m/example-pens',
        category: 'stationery',
        store: 'AliExpress'
    },
    {
        id: 'game-1',
        name: 'Minecraft: Education Edition',
        description: 'Impara divertendoti con il gioco più famoso al mondo.',
        price: '29.99€',
        imageUrl: 'https://images.unsplash.com/photo-1605898835373-02f740d1383b?w=400&q=80',
        affiliateUrl: 'https://amzn.to/example-minecraft',
        category: 'tech',
        store: 'Amazon'
    },
    {
        id: 'headphones-1',
        name: 'Cuffie con Microfono',
        description: 'Ideali per le videolezioni e concentrarti al massimo.',
        price: '45.00€',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
        affiliateUrl: 'https://amzn.to/example-headphones',
        category: 'tech',
        store: 'Amazon'
    }
];
