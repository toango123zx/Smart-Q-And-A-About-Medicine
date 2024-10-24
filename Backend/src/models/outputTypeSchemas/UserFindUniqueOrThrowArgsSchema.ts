import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { BoxChatFindManyArgsSchema } from "../outputTypeSchemas/BoxChatFindManyArgsSchema"
import { MessengerFindManyArgsSchema } from "../outputTypeSchemas/MessengerFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  userId: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  dataOfBirth: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  adress: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  BoxChat: z.union([z.boolean(),z.lazy(() => BoxChatFindManyArgsSchema)]).optional(),
  Messenger: z.union([z.boolean(),z.lazy(() => MessengerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export default UserFindUniqueOrThrowArgsSchema;
