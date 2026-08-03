import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "Nome de usuario muito curto"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha muito fraca")
})

export const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha muito fraca")
})