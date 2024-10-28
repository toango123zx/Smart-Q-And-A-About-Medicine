import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerUpdateWithoutBoxChatInputSchema } from './MessengerUpdateWithoutBoxChatInputSchema';
import { MessengerUncheckedUpdateWithoutBoxChatInputSchema } from './MessengerUncheckedUpdateWithoutBoxChatInputSchema';

export const MessengerUpdateWithWhereUniqueWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerUpdateWithWhereUniqueWithoutBoxChatInput> = z.object({
  where: z.lazy(() => MessengerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MessengerUpdateWithoutBoxChatInputSchema),z.lazy(() => MessengerUncheckedUpdateWithoutBoxChatInputSchema) ]),
}).strict();

export default MessengerUpdateWithWhereUniqueWithoutBoxChatInputSchema;
