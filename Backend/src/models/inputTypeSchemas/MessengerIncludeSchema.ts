import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatArgsSchema } from "../outputTypeSchemas/BoxChatArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const MessengerIncludeSchema: z.ZodType<Prisma.MessengerInclude> = z.object({
  BoxChat: z.union([z.boolean(),z.lazy(() => BoxChatArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default MessengerIncludeSchema;
