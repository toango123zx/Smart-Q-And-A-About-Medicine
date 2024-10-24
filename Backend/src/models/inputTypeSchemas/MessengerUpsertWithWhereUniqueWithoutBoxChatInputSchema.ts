import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerUpdateWithoutBoxChatInputSchema } from './MessengerUpdateWithoutBoxChatInputSchema';
import { MessengerUncheckedUpdateWithoutBoxChatInputSchema } from './MessengerUncheckedUpdateWithoutBoxChatInputSchema';
import { MessengerCreateWithoutBoxChatInputSchema } from './MessengerCreateWithoutBoxChatInputSchema';
import { MessengerUncheckedCreateWithoutBoxChatInputSchema } from './MessengerUncheckedCreateWithoutBoxChatInputSchema';

export const MessengerUpsertWithWhereUniqueWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerUpsertWithWhereUniqueWithoutBoxChatInput> = z.object({
  where: z.lazy(() => MessengerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MessengerUpdateWithoutBoxChatInputSchema),z.lazy(() => MessengerUncheckedUpdateWithoutBoxChatInputSchema) ]),
  create: z.union([ z.lazy(() => MessengerCreateWithoutBoxChatInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutBoxChatInputSchema) ]),
}).strict();

export default MessengerUpsertWithWhereUniqueWithoutBoxChatInputSchema;
