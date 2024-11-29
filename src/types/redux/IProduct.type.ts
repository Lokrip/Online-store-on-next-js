export interface IProduct {
    data_set: {
        id: number;
        title: string;
        description: string;
        price: string;
        discount: number;
        price_with_discount: number;
        image: string;
        slug: string;
        status: string;
        stock: number;
        summary: number;
        brand: number;
        supplier: number;
        color: number[];
        tag: number[];
        category: number;
        created_at: string;
        update_at: string;
    };
    range_page: number
}

