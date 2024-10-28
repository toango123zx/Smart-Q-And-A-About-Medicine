import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { StatusSchema } from './StatusSchema';
import { EnumStatusFieldUpdateOperationsInputSchema } from './EnumStatusFieldUpdateOperationsInputSchema';
import { BoxChatUpdateOneRequiredWithoutMessengerNestedInputSchema } from './BoxChatUpdateOneRequiredWithoutMessengerNestedInputSchema';
import { UserUpdateOneRequiredWithoutMessengerNestedInputSchema } from './UserUpdateOneRequiredWithoutMessengerNestedInputSchema';

export const MessengerUpdateInputSchema: z.ZodType<Prisma.MessengerUpdateInput> = z.object({
  messengerId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deleteAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
  BoxChat: z.lazy(() => BoxChatUpdateOneRequiredWithoutMessengerNestedInputSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutMessengerNestedInputSchema).optional()
}).strict();

export default MessengerUpdateInputSchema;
