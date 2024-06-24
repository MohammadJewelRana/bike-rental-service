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


const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const AuthValidations = {
  userValidationSchema,
  loginValidationSchema,
  refreshTokenValidationSchema
};
