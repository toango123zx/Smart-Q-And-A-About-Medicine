import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerScalarWhereInputSchema } from './MessengerScalarWhereInputSchema';
import { MessengerUpdateManyMutationInputSchema } from './MessengerUpdateManyMutationInputSchema';
import { MessengerUncheckedUpdateManyWithoutBoxChatInputSchema } from './MessengerUncheckedUpdateManyWithoutBoxChatInputSchema';

export const MessengerUpdateManyWithWhereWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerUpdateManyWithWhereWithoutBoxChatInput> = z.object({
  where: z.lazy(() => MessengerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MessengerUpdateManyMutationInputSchema),z.lazy(() => MessengerUncheckedUpdateManyWithoutBoxChatInputSchema) ]),
}).strict();

export default MessengerUpdateManyWithWhereWithoutBoxChatInputSchema;
