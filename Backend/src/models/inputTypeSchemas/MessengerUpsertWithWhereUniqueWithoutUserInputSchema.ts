import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerUpdateWithoutUserInputSchema } from './MessengerUpdateWithoutUserInputSchema';
import { MessengerUncheckedUpdateWithoutUserInputSchema } from './MessengerUncheckedUpdateWithoutUserInputSchema';
import { MessengerCreateWithoutUserInputSchema } from './MessengerCreateWithoutUserInputSchema';
import { MessengerUncheckedCreateWithoutUserInputSchema } from './MessengerUncheckedCreateWithoutUserInputSchema';

export const MessengerUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.MessengerUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => MessengerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MessengerUpdateWithoutUserInputSchema),z.lazy(() => MessengerUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => MessengerCreateWithoutUserInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default MessengerUpsertWithWhereUniqueWithoutUserInputSchema;
