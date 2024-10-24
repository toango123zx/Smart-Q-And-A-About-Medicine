import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatWhereInputSchema } from '../inputTypeSchemas/BoxChatWhereInputSchema'

export const BoxChatDeleteManyArgsSchema: z.ZodType<Prisma.BoxChatDeleteManyArgs> = z.object({
  where: BoxChatWhereInputSchema.optional(),
}).strict() ;

export default BoxChatDeleteManyArgsSchema;
