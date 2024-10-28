import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutMessengerInputSchema } from './UserUpdateWithoutMessengerInputSchema';
import { UserUncheckedUpdateWithoutMessengerInputSchema } from './UserUncheckedUpdateWithoutMessengerInputSchema';
import { UserCreateWithoutMessengerInputSchema } from './UserCreateWithoutMessengerInputSchema';
import { UserUncheckedCreateWithoutMessengerInputSchema } from './UserUncheckedCreateWithoutMessengerInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutMessengerInputSchema: z.ZodType<Prisma.UserUpsertWithoutMessengerInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMessengerInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedCreateWithoutMessengerInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutMessengerInputSchema;
