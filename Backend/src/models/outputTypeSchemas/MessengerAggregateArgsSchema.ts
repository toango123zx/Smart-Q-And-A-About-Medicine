import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { MessengerWhereInputSchema } from '../inputTypeSchemas/MessengerWhereInputSchema'
import { MessengerOrderByWithRelationInputSchema } from '../inputTypeSchemas/MessengerOrderByWithRelationInputSchema'
import { MessengerWhereUniqueInputSchema } from '../inputTypeSchemas/MessengerWhereUniqueInputSchema'

export const MessengerAggregateArgsSchema: z.ZodType<Prisma.MessengerAggregateArgs> = z.object({
  where: MessengerWhereInputSchema.optional(),
  orderBy: z.union([ MessengerOrderByWithRelationInputSchema.array(),MessengerOrderByWithRelationInputSchema ]).optional(),
  cursor: MessengerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MessengerAggregateArgsSchema;
