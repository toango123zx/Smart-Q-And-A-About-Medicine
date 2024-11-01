import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatCreateWithoutUserInputSchema } from './BoxChatCreateWithoutUserInputSchema';
import { BoxChatUncheckedCreateWithoutUserInputSchema } from './BoxChatUncheckedCreateWithoutUserInputSchema';
import { BoxChatCreateOrConnectWithoutUserInputSchema } from './BoxChatCreateOrConnectWithoutUserInputSchema';
import { BoxChatCreateManyUserInputEnvelopeSchema } from './BoxChatCreateManyUserInputEnvelopeSchema';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';

export const BoxChatUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BoxChatUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BoxChatCreateWithoutUserInputSchema),z.lazy(() => BoxChatCreateWithoutUserInputSchema).array(),z.lazy(() => BoxChatUncheckedCreateWithoutUserInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoxChatCreateOrConnectWithoutUserInputSchema),z.lazy(() => BoxChatCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoxChatCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoxChatWhereUniqueInputSchema),z.lazy(() => BoxChatWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BoxChatUncheckedCreateNestedManyWithoutUserInputSchema;
