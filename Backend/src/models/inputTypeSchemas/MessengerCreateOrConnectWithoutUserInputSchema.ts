import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerCreateWithoutUserInputSchema } from './MessengerCreateWithoutUserInputSchema';
import { MessengerUncheckedCreateWithoutUserInputSchema } from './MessengerUncheckedCreateWithoutUserInputSchema';

export const MessengerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.MessengerCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => MessengerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessengerCreateWithoutUserInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default MessengerCreateOrConnectWithoutUserInputSchema;
