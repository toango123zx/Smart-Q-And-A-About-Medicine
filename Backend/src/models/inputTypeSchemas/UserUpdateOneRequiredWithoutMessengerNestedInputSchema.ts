import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutMessengerInputSchema } from './UserCreateWithoutMessengerInputSchema';
import { UserUncheckedCreateWithoutMessengerInputSchema } from './UserUncheckedCreateWithoutMessengerInputSchema';
import { UserCreateOrConnectWithoutMessengerInputSchema } from './UserCreateOrConnectWithoutMessengerInputSchema';
import { UserUpsertWithoutMessengerInputSchema } from './UserUpsertWithoutMessengerInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutMessengerInputSchema } from './UserUpdateToOneWithWhereWithoutMessengerInputSchema';
import { UserUpdateWithoutMessengerInputSchema } from './UserUpdateWithoutMessengerInputSchema';
import { UserUncheckedUpdateWithoutMessengerInputSchema } from './UserUncheckedUpdateWithoutMessengerInputSchema';

export const UserUpdateOneRequiredWithoutMessengerNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMessengerNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedCreateWithoutMessengerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMessengerInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutMessengerInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutMessengerInputSchema),z.lazy(() => UserUpdateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMessengerInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutMessengerNestedInputSchema;
