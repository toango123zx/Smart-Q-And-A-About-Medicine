import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export default StringFieldUpdateOperationsInputSchema;
