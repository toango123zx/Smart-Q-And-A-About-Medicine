import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerScalarWhereInputSchema } from './MessengerScalarWhereInputSchema';
import { MessengerUpdateManyMutationInputSchema } from './MessengerUpdateManyMutationInputSchema';
import { MessengerUncheckedUpdateManyWithoutUserInputSchema } from './MessengerUncheckedUpdateManyWithoutUserInputSchema';

export const MessengerUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.MessengerUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => MessengerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MessengerUpdateManyMutationInputSchema),z.lazy(() => MessengerUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default MessengerUpdateManyWithWhereWithoutUserInputSchema;
