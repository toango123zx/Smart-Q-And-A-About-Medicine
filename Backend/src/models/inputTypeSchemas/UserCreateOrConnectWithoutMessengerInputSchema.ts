import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutMessengerInputSchema } from './UserCreateWithoutMessengerInputSchema';
import { UserUncheckedCreateWithoutMessengerInputSchema } from './UserUncheckedCreateWithoutMessengerInputSchema';

export const UserCreateOrConnectWithoutMessengerInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutMessengerInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedCreateWithoutMessengerInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutMessengerInputSchema;
