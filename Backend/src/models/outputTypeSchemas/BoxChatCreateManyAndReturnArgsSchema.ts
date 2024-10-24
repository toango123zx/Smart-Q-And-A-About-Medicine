import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatCreateManyInputSchema } from '../inputTypeSchemas/BoxChatCreateManyInputSchema'

export const BoxChatCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BoxChatCreateManyAndReturnArgs> = z.object({
  data: z.union([ BoxChatCreateManyInputSchema,BoxChatCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BoxChatCreateManyAndReturnArgsSchema;
