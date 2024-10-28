import { z } from 'zod';
import type { Prisma } from './path/to/prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  BoxChat: z.boolean().optional(),
  Messenger: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
