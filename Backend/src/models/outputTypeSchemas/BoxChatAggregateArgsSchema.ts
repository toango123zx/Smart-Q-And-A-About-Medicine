import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { BoxChatWhereInputSchema } from '../inputTypeSchemas/BoxChatWhereInputSchema'
import { BoxChatOrderByWithRelationInputSchema } from '../inputTypeSchemas/BoxChatOrderByWithRelationInputSchema'
import { BoxChatWhereUniqueInputSchema } from '../inputTypeSchemas/BoxChatWhereUniqueInputSchema'

export const BoxChatAggregateArgsSchema: z.ZodType<Prisma.BoxChatAggregateArgs> = z.object({
  where: BoxChatWhereInputSchema.optional(),
  orderBy: z.union([ BoxChatOrderByWithRelationInputSchema.array(),BoxChatOrderByWithRelationInputSchema ]).optional(),
  cursor: BoxChatWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BoxChatAggregateArgsSchema;
