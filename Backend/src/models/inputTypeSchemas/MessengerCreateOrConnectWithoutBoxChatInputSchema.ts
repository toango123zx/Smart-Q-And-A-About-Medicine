import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerCreateWithoutBoxChatInputSchema } from './MessengerCreateWithoutBoxChatInputSchema';
import { MessengerUncheckedCreateWithoutBoxChatInputSchema } from './MessengerUncheckedCreateWithoutBoxChatInputSchema';

export const MessengerCreateOrConnectWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerCreateOrConnectWithoutBoxChatInput> = z.object({
  where: z.lazy(() => MessengerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessengerCreateWithoutBoxChatInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutBoxChatInputSchema) ]),
}).strict();

export default MessengerCreateOrConnectWithoutBoxChatInputSchema;
