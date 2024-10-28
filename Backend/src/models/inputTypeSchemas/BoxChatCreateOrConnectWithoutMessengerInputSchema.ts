import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';
import { BoxChatCreateWithoutMessengerInputSchema } from './BoxChatCreateWithoutMessengerInputSchema';
import { BoxChatUncheckedCreateWithoutMessengerInputSchema } from './BoxChatUncheckedCreateWithoutMessengerInputSchema';

export const BoxChatCreateOrConnectWithoutMessengerInputSchema: z.ZodType<Prisma.BoxChatCreateOrConnectWithoutMessengerInput> = z.object({
  where: z.lazy(() => BoxChatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoxChatCreateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutMessengerInputSchema) ]),
}).strict();

export default BoxChatCreateOrConnectWithoutMessengerInputSchema;
