import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerCreateWithoutUserInputSchema } from './MessengerCreateWithoutUserInputSchema';
import { MessengerUncheckedCreateWithoutUserInputSchema } from './MessengerUncheckedCreateWithoutUserInputSchema';
import { MessengerCreateOrConnectWithoutUserInputSchema } from './MessengerCreateOrConnectWithoutUserInputSchema';
import { MessengerUpsertWithWhereUniqueWithoutUserInputSchema } from './MessengerUpsertWithWhereUniqueWithoutUserInputSchema';
import { MessengerCreateManyUserInputEnvelopeSchema } from './MessengerCreateManyUserInputEnvelopeSchema';
import { MessengerWhereUniqueInputSchema } from './MessengerWhereUniqueInputSchema';
import { MessengerUpdateWithWhereUniqueWithoutUserInputSchema } from './MessengerUpdateWithWhereUniqueWithoutUserInputSchema';
import { MessengerUpdateManyWithWhereWithoutUserInputSchema } from './MessengerUpdateManyWithWhereWithoutUserInputSchema';
import { MessengerScalarWhereInputSchema } from './MessengerScalarWhereInputSchema';

export const MessengerUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.MessengerUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessengerCreateWithoutUserInputSchema),z.lazy(() => MessengerCreateWithoutUserInputSchema).array(),z.lazy(() => MessengerUncheckedCreateWithoutUserInputSchema),z.lazy(() => MessengerUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessengerCreateOrConnectWithoutUserInputSchema),z.lazy(() => MessengerCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessengerUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MessengerUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessengerCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessengerWhereUniqueInputSchema),z.lazy(() => MessengerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessengerUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => MessengerUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessengerUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => MessengerUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessengerScalarWhereInputSchema),z.lazy(() => MessengerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MessengerUpdateManyWithoutUserNestedInputSchema;
