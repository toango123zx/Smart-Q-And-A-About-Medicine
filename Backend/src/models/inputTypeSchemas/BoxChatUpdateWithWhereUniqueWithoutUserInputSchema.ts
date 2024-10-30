import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';
import { BoxChatUpdateWithoutUserInputSchema } from './BoxChatUpdateWithoutUserInputSchema';
import { BoxChatUncheckedUpdateWithoutUserInputSchema } from './BoxChatUncheckedUpdateWithoutUserInputSchema';

export const BoxChatUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BoxChatUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BoxChatWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BoxChatUpdateWithoutUserInputSchema),z.lazy(() => BoxChatUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default BoxChatUpdateWithWhereUniqueWithoutUserInputSchema;
