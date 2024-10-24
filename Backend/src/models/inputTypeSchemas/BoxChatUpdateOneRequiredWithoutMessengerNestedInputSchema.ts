import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoxChatCreateWithoutMessengerInputSchema } from './BoxChatCreateWithoutMessengerInputSchema';
import { BoxChatUncheckedCreateWithoutMessengerInputSchema } from './BoxChatUncheckedCreateWithoutMessengerInputSchema';
import { BoxChatCreateOrConnectWithoutMessengerInputSchema } from './BoxChatCreateOrConnectWithoutMessengerInputSchema';
import { BoxChatUpsertWithoutMessengerInputSchema } from './BoxChatUpsertWithoutMessengerInputSchema';
import { BoxChatWhereUniqueInputSchema } from './BoxChatWhereUniqueInputSchema';
import { BoxChatUpdateToOneWithWhereWithoutMessengerInputSchema } from './BoxChatUpdateToOneWithWhereWithoutMessengerInputSchema';
import { BoxChatUpdateWithoutMessengerInputSchema } from './BoxChatUpdateWithoutMessengerInputSchema';
import { BoxChatUncheckedUpdateWithoutMessengerInputSchema } from './BoxChatUncheckedUpdateWithoutMessengerInputSchema';

export const BoxChatUpdateOneRequiredWithoutMessengerNestedInputSchema: z.ZodType<Prisma.BoxChatUpdateOneRequiredWithoutMessengerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BoxChatCreateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedCreateWithoutMessengerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoxChatCreateOrConnectWithoutMessengerInputSchema).optional(),
  upsert: z.lazy(() => BoxChatUpsertWithoutMessengerInputSchema).optional(),
  connect: z.lazy(() => BoxChatWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BoxChatUpdateToOneWithWhereWithoutMessengerInputSchema),z.lazy(() => BoxChatUpdateWithoutMessengerInputSchema),z.lazy(() => BoxChatUncheckedUpdateWithoutMessengerInputSchema) ]).optional(),
}).strict();

export default BoxChatUpdateOneRequiredWithoutMessengerNestedInputSchema;
