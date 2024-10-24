import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutBoxChatInputSchema } from './UserUpdateWithoutBoxChatInputSchema';
import { UserUncheckedUpdateWithoutBoxChatInputSchema } from './UserUncheckedUpdateWithoutBoxChatInputSchema';

export const UserUpdateToOneWithWhereWithoutBoxChatInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBoxChatInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBoxChatInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutBoxChatInputSchema;
