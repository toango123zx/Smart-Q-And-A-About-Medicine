import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBoxChatInputSchema } from './UserCreateWithoutBoxChatInputSchema';
import { UserUncheckedCreateWithoutBoxChatInputSchema } from './UserUncheckedCreateWithoutBoxChatInputSchema';
import { UserCreateOrConnectWithoutBoxChatInputSchema } from './UserCreateOrConnectWithoutBoxChatInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBoxChatInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBoxChatInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedCreateWithoutBoxChatInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBoxChatInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutBoxChatInputSchema;
