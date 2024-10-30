import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBoxChatInputSchema } from './UserCreateWithoutBoxChatInputSchema';
import { UserUncheckedCreateWithoutBoxChatInputSchema } from './UserUncheckedCreateWithoutBoxChatInputSchema';
import { UserCreateOrConnectWithoutBoxChatInputSchema } from './UserCreateOrConnectWithoutBoxChatInputSchema';
import { UserUpsertWithoutBoxChatInputSchema } from './UserUpsertWithoutBoxChatInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBoxChatInputSchema } from './UserUpdateToOneWithWhereWithoutBoxChatInputSchema';
import { UserUpdateWithoutBoxChatInputSchema } from './UserUpdateWithoutBoxChatInputSchema';
import { UserUncheckedUpdateWithoutBoxChatInputSchema } from './UserUncheckedUpdateWithoutBoxChatInputSchema';

export const UserUpdateOneRequiredWithoutBoxChatNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBoxChatNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedCreateWithoutBoxChatInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBoxChatInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBoxChatInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBoxChatInputSchema),z.lazy(() => UserUpdateWithoutBoxChatInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBoxChatInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBoxChatNestedInputSchema;
