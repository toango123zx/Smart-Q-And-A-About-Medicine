import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatUpdateWithoutMessengerInputSchema } from './BoxChatUpdateWithoutMessengerInputSchema';
import { BoxChatUncheckedUpdateWithoutMessengerInputSchema } from './BoxChatUncheckedUpdateWithoutMessengerInputSchema';
import { BoxChatCreateWithoutMessengerInputSchema } from './BoxChatCreateWithoutMessengerInputSchema';
import { BoxChatUncheckedCreateWithoutMessengerInputSchema } from './BoxChatUncheckedCreateWithoutMessengerInputSchema';
import { BoxChatWhereInputSchema } from './BoxChatWhereInputSchema';

export const BoxChatUpsertWithoutMessengerInputSchema: z.ZodType<Prisma.BoxChatUpsertWithoutMessengerInput> = z.object({
  update: z.union([ z.lazy(() => BoxChatUpdateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedUpdateWithoutMessengerInputSchema) ]),
  create: z.union([ z.lazy(() => BoxChatCreateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutMessengerInputSchema) ]),
  where: z.lazy(() => BoxChatWhereInputSchema).optional()
}).strict();

export default BoxChatUpsertWithoutMessengerInputSchema;
