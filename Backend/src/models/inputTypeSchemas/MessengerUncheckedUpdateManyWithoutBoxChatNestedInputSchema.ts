import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerCreateWithoutBoxChatInputSchema } from './MessengerCreateWithoutBoxChatInputSchema';
import { MessengerUncheckedCreateWithoutBoxChatInputSchema } from './MessengerUncheckedCreateWithoutBoxChatInputSchema';
import { MessengerCreateOrConnectWithoutBoxChatInputSchema } from './MessengerCreateOrConnectWithoutBoxChatInputSchema';
import { MessengerUpsertWithWhereUniqueWithoutBoxChatInputSchema } from './MessengerUpsertWithWhereUniqueWithoutBoxChatInputSchema';
import { MessengerCreateManyBoxChatInputEnvelopeSchema } from './MessengerCreateManyBoxChatInputEnvelopeSchema';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerUpdateWithWhereUniqueWithoutBoxChatInputSchema } from './MessengerUpdateWithWhereUniqueWithoutBoxChatInputSchema';
import { MessengerUpdateManyWithWhereWithoutBoxChatInputSchema } from './MessengerUpdateManyWithWhereWithoutBoxChatInputSchema';
import { MessengerScalarWhereInputSchema } from './MessengerScalarWhereInputSchema';

export const MessengerUncheckedUpdateManyWithoutBoxChatNestedInputSchema: z.ZodType<Prisma.MessengerUncheckedUpdateManyWithoutBoxChatNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessengerCreateWithoutBoxChatInputSchema),z.lazy(() => MessengerCreateWithoutBoxChatInputSchema).array(),z.lazy(() => MessengerUncheckedCreateWithoutBoxChatInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutBoxChatInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessengerCreateOrConnectWithoutBoxChatInputSchema),z.lazy(() => MessengerCreateOrConnectWithoutBoxChatInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessengerUpsertWithWhereUniqueWithoutBoxChatInputSchema),z.lazy(() => MessengerUpsertWithWhereUniqueWithoutBoxChatInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessengerCreateManyBoxChatInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessengerUpdateWithWhereUniqueWithoutBoxChatInputSchema),z.lazy(() => MessengerUpdateWithWhereUniqueWithoutBoxChatInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessengerUpdateManyWithWhereWithoutBoxChatInputSchema),z.lazy(() => MessengerUpdateManyWithWhereWithoutBoxChatInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessengerScalarWhereInputSchema),z.lazy(() => MessengerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MessengerUncheckedUpdateManyWithoutBoxChatNestedInputSchema;
