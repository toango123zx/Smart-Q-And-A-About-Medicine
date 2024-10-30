import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerCreateWithoutBoxChatInputSchema } from './MessengerCreateWithoutBoxChatInputSchema';
import { MessengerUncheckedCreateWithoutBoxChatInputSchema } from './MessengerUncheckedCreateWithoutBoxChatInputSchema';
import { MessengerCreateOrConnectWithoutBoxChatInputSchema } from './MessengerCreateOrConnectWithoutBoxChatInputSchema';
import { MessengerCreateManyBoxChatInputEnvelopeSchema } from './MessengerCreateManyBoxChatInputEnvelopeSchema';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';

export const MessengerCreateNestedManyWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerCreateNestedManyWithoutBoxChatInput> = z.object({
  create: z.union([ z.lazy(() => MessengerCreateWithoutBoxChatInputSchema),z.lazy(() => MessengerCreateWithoutBoxChatInputSchema).array(),z.lazy(() => MessengerUncheckedCreateWithoutBoxChatInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutBoxChatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessengerCreateOrConnectWithoutBoxChatInputSchema),z.lazy(() => MessengerCreateOrConnectWithoutBoxChatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessengerCreateManyBoxChatInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MessengerCreateNestedManyWithoutBoxChatInputSchema;
