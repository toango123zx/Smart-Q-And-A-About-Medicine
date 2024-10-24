import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatWhereInputSchema } from '../inputTypeSchemas/BoxChatWhereInputSchema'
import { BoxChatOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BoxChatOrderByWithAggregationInputSchema'
import { BoxChatScalarFieldEnumSchema } from '../inputTypeSchemas/BoxChatScalarFieldEnumSchema'
import { BoxChatScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BoxChatScalarWhereWithAggregatesInputSchema'

export const BoxChatGroupByArgsSchema: z.ZodType<Prisma.BoxChatGroupByArgs> = z.object({
  where: BoxChatWhereInputSchema.optional(),
  orderBy: z.union([ BoxChatOrderByWithAggregationInputSchema.array(),BoxChatOrderByWithAggregationInputSchema ]).optional(),
  by: BoxChatScalarFieldEnumSchema.array(),
  having: BoxChatScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BoxChatGroupByArgsSchema;
