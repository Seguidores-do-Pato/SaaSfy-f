export interface User {
    readonly _id: string;
    email: string;
    name: string;
    phone: string;
    social: {
        facebook: string;
        twitter: string;
        linkedin: string;
        github: string;
    };
    role: string;
    createdAt: Date;
    updatedAt: Date;
}
