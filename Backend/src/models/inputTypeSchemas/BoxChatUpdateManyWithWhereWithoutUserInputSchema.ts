import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoxChatScalarWhereInputSchema } from './BoxChatScalarWhereInputSchema';
import { BoxChatUpdateManyMutationInputSchema } from './BoxChatUpdateManyMutationInputSchema';
import { BoxChatUncheckedUpdateManyWithoutUserInputSchema } from './BoxChatUncheckedUpdateManyWithoutUserInputSchema';

export const BoxChatUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BoxChatUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => BoxChatScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BoxChatUpdateManyMutationInputSchema),z.lazy(() => BoxChatUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default BoxChatUpdateManyWithWhereWithoutUserInputSchema;
