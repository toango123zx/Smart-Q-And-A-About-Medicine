import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatCreateWithoutUserInputSchema } from './BoxChatCreateWithoutUserInputSchema';
import { BoxChatUncheckedCreateWithoutUserInputSchema } from './BoxChatUncheckedCreateWithoutUserInputSchema';
import { BoxChatCreateOrConnectWithoutUserInputSchema } from './BoxChatCreateOrConnectWithoutUserInputSchema';
import { BoxChatUpsertWithWhereUniqueWithoutUserInputSchema } from './BoxChatUpsertWithWhereUniqueWithoutUserInputSchema';
import { BoxChatCreateManyUserInputEnvelopeSchema } from './BoxChatCreateManyUserInputEnvelopeSchema';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';
import { BoxChatUpdateWithWhereUniqueWithoutUserInputSchema } from './BoxChatUpdateWithWhereUniqueWithoutUserInputSchema';
import { BoxChatUpdateManyWithWhereWithoutUserInputSchema } from './BoxChatUpdateManyWithWhereWithoutUserInputSchema';
import { BoxChatScalarWhereInputSchema } from './BoxChatScalarWhereInputSchema';

export const BoxChatUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BoxChatUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BoxChatCreateWithoutUserInputSchema),z.lazy(() => BoxChatCreateWithoutUserInputSchema).array(),z.lazy(() => BoxChatUncheckedCreateWithoutUserInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoxChatCreateOrConnectWithoutUserInputSchema),z.lazy(() => BoxChatCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoxChatUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BoxChatUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoxChatCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoxChatWhereUniqueInputSchema),z.lazy(() => BoxChatWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoxChatWhereUniqueInputSchema),z.lazy(() => BoxChatWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoxChatWhereUniqueInputSchema),z.lazy(() => BoxChatWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoxChatWhereUniqueInputSchema),z.lazy(() => BoxChatWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoxChatUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BoxChatUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoxChatUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BoxChatUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoxChatScalarWhereInputSchema),z.lazy(() => BoxChatScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BoxChatUncheckedUpdateManyWithoutUserNestedInputSchema;
