import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatWhereInputSchema } from './BoxChatWhereInputSchema';
import { BoxChatUpdateWithoutMessengerInputSchema } from './BoxChatUpdateWithoutMessengerInputSchema';
import { BoxChatUncheckedUpdateWithoutMessengerInputSchema } from './BoxChatUncheckedUpdateWithoutMessengerInputSchema';

export const BoxChatUpdateToOneWithWhereWithoutMessengerInputSchema: z.ZodType<Prisma.BoxChatUpdateToOneWithWhereWithoutMessengerInput> = z.object({
  where: z.lazy(() => BoxChatWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BoxChatUpdateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedUpdateWithoutMessengerInputSchema) ]),
}).strict();

export default BoxChatUpdateToOneWithWhereWithoutMessengerInputSchema;
