import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatIncludeSchema } from '../inputTypeSchemas/BoxChatIncludeSchema'
import { BoxChatWhereInputSchema } from '../inputTypeSchemas/BoxChatWhereInputSchema'
import { BoxChatOrderByWithRelationInputSchema } from '../inputTypeSchemas/BoxChatOrderByWithRelationInputSchema'
import { BoxChatWhereUniqueInputSchema } from '../inputTypeSchemas/BoxChatWhereUniqueInputSchema'
import { BoxChatScalarFieldEnumSchema } from '../inputTypeSchemas/BoxChatScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { MessengerFindManyArgsSchema } from "../outputTypeSchemas/MessengerFindManyArgsSchema"
import { BoxChatCountOutputTypeArgsSchema } from "../outputTypeSchemas/BoxChatCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BoxChatSelectSchema: z.ZodType<Prisma.BoxChatSelect> = z.object({
  boxChatId: z.boolean().optional(),
  name: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Messenger: z.union([z.boolean(),z.lazy(() => MessengerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BoxChatCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BoxChatFindFirstArgsSchema: z.ZodType<Prisma.BoxChatFindFirstArgs> = z.object({
  select: BoxChatSelectSchema.optional(),
  include: BoxChatIncludeSchema.optional(),
  where: BoxChatWhereInputSchema.optional(),
  orderBy: z.union([ BoxChatOrderByWithRelationInputSchema.array(),BoxChatOrderByWithRelationInputSchema ]).optional(),
  cursor: BoxChatWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BoxChatScalarFieldEnumSchema,BoxChatScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BoxChatFindFirstArgsSchema;
