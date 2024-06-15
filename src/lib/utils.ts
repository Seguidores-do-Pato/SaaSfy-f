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

export function base64ToImageUrl(base64String: string): string {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    return URL.createObjectURL(blob);
}
