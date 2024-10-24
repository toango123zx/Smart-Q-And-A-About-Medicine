import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerUpdateWithoutUserInputSchema } from './MessengerUpdateWithoutUserInputSchema';
import { MessengerUncheckedUpdateWithoutUserInputSchema } from './MessengerUncheckedUpdateWithoutUserInputSchema';

export const MessengerUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MessengerUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MessengerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MessengerUpdateWithoutUserInputSchema),z.lazy(() => MessengerUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default MessengerUpdateWithWhereUniqueWithoutUserInputSchema;
