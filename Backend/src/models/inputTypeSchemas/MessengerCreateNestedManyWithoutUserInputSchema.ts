import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerCreateWithoutUserInputSchema } from './MessengerCreateWithoutUserInputSchema';
import { MessengerUncheckedCreateWithoutUserInputSchema } from './MessengerUncheckedCreateWithoutUserInputSchema';
import { MessengerCreateOrConnectWithoutUserInputSchema } from './MessengerCreateOrConnectWithoutUserInputSchema';
import { MessengerCreateManyUserInputEnvelopeSchema } from './MessengerCreateManyUserInputEnvelopeSchema';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';

export const MessengerCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.MessengerCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => MessengerCreateWithoutUserInputSchema),z.lazy(() => MessengerCreateWithoutUserInputSchema).array(),z.lazy(() => MessengerUncheckedCreateWithoutUserInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessengerCreateOrConnectWithoutUserInputSchema),z.lazy(() => MessengerCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessengerCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MessengerCreateNestedManyWithoutUserInputSchema;
