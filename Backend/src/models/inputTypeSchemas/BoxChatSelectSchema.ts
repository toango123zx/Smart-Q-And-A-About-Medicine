import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { MessengerFindManyArgsSchema } from "../outputTypeSchemas/MessengerFindManyArgsSchema"
import { BoxChatCountOutputTypeArgsSchema } from "../outputTypeSchemas/BoxChatCountOutputTypeArgsSchema"

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

export default BoxChatSelectSchema;
