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
        name: 'Tablet per Studenti 10"',
        description: 'Perfetto per leggere i compiti e guardare le lezioni su Geniotto.',
        price: '120.00€',
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
        affiliateUrl: 'https://amzn.to/example-tablet', // Sostituire con link reale
        category: 'tech',
        store: 'Amazon'
    },
    {
        id: 'notebk-1',
        name: 'Quaderno Smart Reusable',
        description: 'Scrivi, scansiona e cancella. Ideale per risparmiare carta.',
        price: '29.90€',
        imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80',
        affiliateUrl: 'https://s.click.aliexpress.com/e/example-notebook', // Sostituire con link reale
        category: 'stationery',
        store: 'AliExpress'
    },
    {
        id: 'lamp-1',
        name: 'Lampada LED Protezione Occhi',
        description: 'Luce calda e dimmerabile per studiare la sera senza stancarsi.',
        price: '19.99€',
        imageUrl: 'https://images.unsplash.com/photo-1534073828943-f801091bb270?w=400&q=80',
        affiliateUrl: 'https://amzn.to/example-lamp', // Sostituire con link reale
        category: 'tech',
        store: 'Amazon'
    }
];
