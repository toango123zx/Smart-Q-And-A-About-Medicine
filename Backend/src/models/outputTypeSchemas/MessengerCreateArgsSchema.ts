import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { MessengerIncludeSchema } from '../inputTypeSchemas/MessengerIncludeSchema'
import { MessengerCreateInputSchema } from '../inputTypeSchemas/MessengerCreateInputSchema'
import { MessengerUncheckedCreateInputSchema } from '../inputTypeSchemas/MessengerUncheckedCreateInputSchema'
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

export const MessengerCreateArgsSchema: z.ZodType<Prisma.MessengerCreateArgs> = z.object({
  select: MessengerSelectSchema.optional(),
  include: MessengerIncludeSchema.optional(),
  data: z.union([ MessengerCreateInputSchema,MessengerUncheckedCreateInputSchema ]),
}).strict() ;

export default MessengerCreateArgsSchema;
