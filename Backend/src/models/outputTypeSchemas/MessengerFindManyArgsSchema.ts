import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { MessengerIncludeSchema } from '../inputTypeSchemas/MessengerIncludeSchema'
import { MessengerWhereInputSchema } from '../inputTypeSchemas/MessengerWhereInputSchema'
import { MessengerOrderByWithRelationInputSchema } from '../inputTypeSchemas/MessengerOrderByWithRelationInputSchema'
import { MessengerWhereUniqueInputSchema } from '../inputTypeSchemas/MessengerWhereUniqueInputSchema'
import { MessengerScalarFieldEnumSchema } from '../inputTypeSchemas/MessengerScalarFieldEnumSchema'
import { BoxChatArgsSchema } from "../outputTypeSchemas/BoxChatArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MessengerSelectSchema: z.ZodType<Prisma.MessengerSelect> = z.object({
  messengerId: z.boolean().optional(),
  content: z.boolean().optional(),
  boxChatId: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deleteAt: z.boolean().optional(),
  status: z.boolean().optional(),
  BoxChat: z.union([z.boolean(),z.lazy(() => BoxChatArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const MessengerFindManyArgsSchema: z.ZodType<Prisma.MessengerFindManyArgs> = z.object({
  select: MessengerSelectSchema.optional(),
  include: MessengerIncludeSchema.optional(),
  where: MessengerWhereInputSchema.optional(),
  orderBy: z.union([ MessengerOrderByWithRelationInputSchema.array(),MessengerOrderByWithRelationInputSchema ]).optional(),
  cursor: MessengerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessengerScalarFieldEnumSchema,MessengerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default MessengerFindManyArgsSchema;
