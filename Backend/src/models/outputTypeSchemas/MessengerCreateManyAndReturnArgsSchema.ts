import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessengerCreateManyInputSchema } from '../inputTypeSchemas/MessengerCreateManyInputSchema'

export const MessengerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MessengerCreateManyAndReturnArgs> = z.object({
  data: z.union([ MessengerCreateManyInputSchema,MessengerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MessengerCreateManyAndReturnArgsSchema;
