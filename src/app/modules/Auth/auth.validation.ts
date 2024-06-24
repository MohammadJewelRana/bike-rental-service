import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string({ invalid_type_error: 'password must be string' }),
    phone: z.string(),
    address: z.string(),
    role: z.enum(['admin', 'user']),
    isDeleted: z.boolean().optional().default(false),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string({ invalid_type_error: 'password must be string' }),
  }),
});

export const AuthValidations = {
  userValidationSchema,
  loginValidationSchema,
};
