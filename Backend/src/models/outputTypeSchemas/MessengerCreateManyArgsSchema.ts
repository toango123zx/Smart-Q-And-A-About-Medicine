import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { MessengerCreateManyInputSchema } from '../inputTypeSchemas/MessengerCreateManyInputSchema'

export const MessengerCreateManyArgsSchema: z.ZodType<Prisma.MessengerCreateManyArgs> = z.object({
  data: z.union([ MessengerCreateManyInputSchema,MessengerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MessengerCreateManyArgsSchema;
