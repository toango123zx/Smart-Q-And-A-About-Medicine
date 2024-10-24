import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';
import { BoxChatCreateWithoutUserInputSchema } from './BoxChatCreateWithoutUserInputSchema';
import { BoxChatUncheckedCreateWithoutUserInputSchema } from './BoxChatUncheckedCreateWithoutUserInputSchema';

export const BoxChatCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BoxChatCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BoxChatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoxChatCreateWithoutUserInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BoxChatCreateOrConnectWithoutUserInputSchema;
