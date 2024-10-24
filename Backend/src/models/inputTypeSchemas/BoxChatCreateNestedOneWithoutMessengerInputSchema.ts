import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoxChatCreateWithoutMessengerInputSchema } from './BoxChatCreateWithoutMessengerInputSchema';
import { BoxChatUncheckedCreateWithoutMessengerInputSchema } from './BoxChatUncheckedCreateWithoutMessengerInputSchema';
import { BoxChatCreateOrConnectWithoutMessengerInputSchema } from './BoxChatCreateOrConnectWithoutMessengerInputSchema';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';

export const BoxChatCreateNestedOneWithoutMessengerInputSchema: z.ZodType<Prisma.BoxChatCreateNestedOneWithoutMessengerInput> = z.object({
  create: z.union([ z.lazy(() => BoxChatCreateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutMessengerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoxChatCreateOrConnectWithoutMessengerInputSchema).optional(),
  connect: z.lazy(() => BoxChatWhereUniqueInputSchema).optional()
}).strict();

export default BoxChatCreateNestedOneWithoutMessengerInputSchema;
