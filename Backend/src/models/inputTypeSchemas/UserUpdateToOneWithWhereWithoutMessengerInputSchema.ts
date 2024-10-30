import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutMessengerInputSchema } from './UserUpdateWithoutMessengerInputSchema';
import { UserUncheckedUpdateWithoutMessengerInputSchema } from './UserUncheckedUpdateWithoutMessengerInputSchema';

export const UserUpdateToOneWithWhereWithoutMessengerInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutMessengerInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutMessengerInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutMessengerInputSchema;
