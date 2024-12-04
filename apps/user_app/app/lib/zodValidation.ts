import { z } from 'zod'

export const UserSchema = z.object({
    name: z.string().min(1, 'name cannot be empty'),
    phone: z.string().length(10).regex(/^\d{10}$/, 'Phone no must be exactly 10 digits'),
    password: z.string().min(8, 'Minimum 8 characters required')
})