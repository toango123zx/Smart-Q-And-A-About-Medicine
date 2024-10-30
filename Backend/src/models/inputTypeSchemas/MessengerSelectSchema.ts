import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { BoxChatArgsSchema } from "../outputTypeSchemas/BoxChatArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

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

export default MessengerSelectSchema;
