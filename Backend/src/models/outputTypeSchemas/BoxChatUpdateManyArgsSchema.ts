import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatUpdateManyMutationInputSchema } from '../inputTypeSchemas/BoxChatUpdateManyMutationInputSchema'
import { BoxChatUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BoxChatUncheckedUpdateManyInputSchema'
import { BoxChatWhereInputSchema } from '../inputTypeSchemas/BoxChatWhereInputSchema'

export const BoxChatUpdateManyArgsSchema: z.ZodType<Prisma.BoxChatUpdateManyArgs> = z.object({
  data: z.union([ BoxChatUpdateManyMutationInputSchema,BoxChatUncheckedUpdateManyInputSchema ]),
  where: BoxChatWhereInputSchema.optional(),
}).strict() ;

export default BoxChatUpdateManyArgsSchema;
