interface Product {
    readonly _id: string;
    name: string;
    version: string;
    description: string;
    owner: string;
    price: number;
    category: string;
    available: boolean;
    features: string[];
    createdAt: Date;
    updatedAt: Date;
}
