import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';
import { MessengerUpdateManyMutationInputSchema } from '../inputTypeSchemas/MessengerUpdateManyMutationInputSchema'
import { MessengerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MessengerUncheckedUpdateManyInputSchema'
import { MessengerWhereInputSchema } from '../inputTypeSchemas/MessengerWhereInputSchema'

export const MessengerUpdateManyArgsSchema: z.ZodType<Prisma.MessengerUpdateManyArgs> = z.object({
  data: z.union([ MessengerUpdateManyMutationInputSchema,MessengerUncheckedUpdateManyInputSchema ]),
  where: MessengerWhereInputSchema.optional(),
}).strict() ;

export default MessengerUpdateManyArgsSchema;
