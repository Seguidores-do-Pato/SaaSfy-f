import { z } from 'zod';

export const loginValidator = z.object({
    email: z.string().email(),
    password: z.string().min(3)
});

export const registerValidator = z.object({
    email: z.string().email(),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/, {
        message:
            'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long'
    }),
    name: z.string().min(3)
});

export type TSignUp = z.infer<typeof registerValidator>;
export type TSignIn = z.infer<typeof loginValidator>;
