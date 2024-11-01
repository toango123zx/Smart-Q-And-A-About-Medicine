import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { StatusSchema } from './StatusSchema';
import { EnumStatusFieldUpdateOperationsInputSchema } from './EnumStatusFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutBoxChatNestedInputSchema } from './UserUpdateOneRequiredWithoutBoxChatNestedInputSchema';
import { MessengerUpdateManyWithoutBoxChatNestedInputSchema } from './MessengerUpdateManyWithoutBoxChatNestedInputSchema';

export const BoxChatUpdateInputSchema: z.ZodType<Prisma.BoxChatUpdateInput> = z.object({
  boxChatId: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutBoxChatNestedInputSchema).optional(),
  Messenger: z.lazy(() => MessengerUpdateManyWithoutBoxChatNestedInputSchema).optional()
}).strict();

export default BoxChatUpdateInputSchema;
