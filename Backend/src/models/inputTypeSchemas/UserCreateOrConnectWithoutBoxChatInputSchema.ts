import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutBoxChatInputSchema } from './UserCreateWithoutBoxChatInputSchema';
import { UserUncheckedCreateWithoutBoxChatInputSchema } from './UserUncheckedCreateWithoutBoxChatInputSchema';

export const UserCreateOrConnectWithoutBoxChatInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBoxChatInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedCreateWithoutBoxChatInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutBoxChatInputSchema;
