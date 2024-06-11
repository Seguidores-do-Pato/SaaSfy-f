import { z } from 'zod';

export const loginValidator = z.object({
    email: z.string().email({ message: 'Email inválido.' }),
    password: z.string().min(3, { message: 'A senha deve conter pelo menos 3 caracteres.' })
});

export const registerValidator = z.object({
    email: z.string().email({ message: 'Email inválido.' }),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/, {
        message:
            'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número, um caractere especial e ter pelo menos 8 caracteres'
    }),
    name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
});

export const createProductValidator = z.object({
    name: z.string().min(1, { message: 'O nome deve ter pelo menos 1 caracter.' }),
    version: z.string().default('1.0.0'),
    description: z
        .string()
        .min(15, { message: 'A descrição deve ter pelo menos 15 caracteres.' })
        .max(255, { message: 'Permitido apenas 255 caracteres.' }),
    owner: z.string(),
    price: z.number().default(1),
    category: z.string().default('Automation'),
    available: z.boolean().default(false),
    features: z.string().array().optional()
});

export type TcreateProduct = z.infer<typeof createProductValidator>;
export type TSignUp = z.infer<typeof registerValidator>;
export type TSignIn = z.infer<typeof loginValidator>;
