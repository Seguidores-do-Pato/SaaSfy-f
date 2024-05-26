import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(
    price: number | string,
    options: {
        currency?: 'BRL' | 'USD';
        notation?: Intl.NumberFormatOptions['notation'];
    } = {}
) {
    const { currency = 'BRL', notation = 'compact' } = options;
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: currency,
        notation,
        maximumFractionDigits: 2
    }).format(numericPrice);
}

export const imageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result as string;
            resolve(base64String);
        };

        reader.onerror = error => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};
