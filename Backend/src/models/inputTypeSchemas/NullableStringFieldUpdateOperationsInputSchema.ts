import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export default NullableStringFieldUpdateOperationsInputSchema;
