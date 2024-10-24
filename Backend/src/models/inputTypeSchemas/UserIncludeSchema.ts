import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatFindManyArgsSchema } from "../outputTypeSchemas/BoxChatFindManyArgsSchema"
import { MessengerFindManyArgsSchema } from "../outputTypeSchemas/MessengerFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  BoxChat: z.union([z.boolean(),z.lazy(() => BoxChatFindManyArgsSchema)]).optional(),
  Messenger: z.union([z.boolean(),z.lazy(() => MessengerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
