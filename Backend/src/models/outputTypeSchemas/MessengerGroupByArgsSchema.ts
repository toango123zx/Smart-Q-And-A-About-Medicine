import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessengerWhereInputSchema } from '../inputTypeSchemas/MessengerWhereInputSchema'
import { MessengerOrderByWithAggregationInputSchema } from '../inputTypeSchemas/MessengerOrderByWithAggregationInputSchema'
import { MessengerScalarFieldEnumSchema } from '../inputTypeSchemas/MessengerScalarFieldEnumSchema'
import { MessengerScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/MessengerScalarWhereWithAggregatesInputSchema'

export const MessengerGroupByArgsSchema: z.ZodType<Prisma.MessengerGroupByArgs> = z.object({
  where: MessengerWhereInputSchema.optional(),
  orderBy: z.union([ MessengerOrderByWithAggregationInputSchema.array(),MessengerOrderByWithAggregationInputSchema ]).optional(),
  by: MessengerScalarFieldEnumSchema.array(),
  having: MessengerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default MessengerGroupByArgsSchema;
