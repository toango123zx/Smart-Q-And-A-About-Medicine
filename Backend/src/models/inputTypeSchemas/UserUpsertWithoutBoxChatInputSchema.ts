import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutBoxChatInputSchema } from './UserUpdateWithoutBoxChatInputSchema';
import { UserUncheckedUpdateWithoutBoxChatInputSchema } from './UserUncheckedUpdateWithoutBoxChatInputSchema';
import { UserCreateWithoutBoxChatInputSchema } from './UserCreateWithoutBoxChatInputSchema';
import { UserUncheckedCreateWithoutBoxChatInputSchema } from './UserUncheckedCreateWithoutBoxChatInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutBoxChatInputSchema: z.ZodType<Prisma.UserUpsertWithoutBoxChatInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBoxChatInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedCreateWithoutBoxChatInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutBoxChatInputSchema;
