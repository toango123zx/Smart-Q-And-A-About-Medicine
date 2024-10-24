import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessengerWhereInputSchema } from '../inputTypeSchemas/MessengerWhereInputSchema'

export const MessengerDeleteManyArgsSchema: z.ZodType<Prisma.MessengerDeleteManyArgs> = z.object({
  where: MessengerWhereInputSchema.optional(),
}).strict() ;

export default MessengerDeleteManyArgsSchema;
