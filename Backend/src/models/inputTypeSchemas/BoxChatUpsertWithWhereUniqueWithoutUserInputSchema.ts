import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';
import { BoxChatUpdateWithoutUserInputSchema } from './BoxChatUpdateWithoutUserInputSchema';
import { BoxChatUncheckedUpdateWithoutUserInputSchema } from './BoxChatUncheckedUpdateWithoutUserInputSchema';
import { BoxChatCreateWithoutUserInputSchema } from './BoxChatCreateWithoutUserInputSchema';
import { BoxChatUncheckedCreateWithoutUserInputSchema } from './BoxChatUncheckedCreateWithoutUserInputSchema';

export const BoxChatUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BoxChatUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BoxChatWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BoxChatUpdateWithoutUserInputSchema),z.lazy(() => BoxChatUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BoxChatCreateWithoutUserInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BoxChatUpsertWithWhereUniqueWithoutUserInputSchema;
