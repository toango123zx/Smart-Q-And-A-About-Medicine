import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { MessengerWhereInputSchema } from '../inputTypeSchemas/MessengerWhereInputSchema'

export const MessengerDeleteManyArgsSchema: z.ZodType<Prisma.MessengerDeleteManyArgs> = z.object({
  where: MessengerWhereInputSchema.optional(),
}).strict() ;

export default MessengerDeleteManyArgsSchema;
