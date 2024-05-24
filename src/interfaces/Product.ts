interface Product {
    readonly _id: string;
    name: string;
    owner: string;
    version: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
