import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { UserCreateWithoutMessengerInputSchema } from './UserCreateWithoutMessengerInputSchema';
import { UserUncheckedCreateWithoutMessengerInputSchema } from './UserUncheckedCreateWithoutMessengerInputSchema';
import { UserCreateOrConnectWithoutMessengerInputSchema } from './UserCreateOrConnectWithoutMessengerInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutMessengerInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutMessengerInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutMessengerInputSchema),z.lazy(() => UserUncheckedCreateWithoutMessengerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMessengerInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutMessengerInputSchema;
