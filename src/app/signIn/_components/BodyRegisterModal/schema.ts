import { z } from 'zod';

export const createSchemaForm = (isLoggedIn: boolean) => {
  const baseSchema = z.object({
    email: z.string()
      .min(1, { message: "Este campo deve ser preenchido." })
      .email("Este não é um e-mail válido."),
    password: z.string().min(3, { message: "Campo de senha precisa ter no min 3 caracteres" }),
  });

  const confirmPasswordSchema = z.object({
    confirmPassword: z.string().min(3, { message: "Este campo deve ser preenchido." })
  });

  if (isLoggedIn) {
    return baseSchema;
  }

  return baseSchema.merge(confirmPasswordSchema).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não correspondem",
        path: ['confirmPassword'],
      });
    }
  });
};