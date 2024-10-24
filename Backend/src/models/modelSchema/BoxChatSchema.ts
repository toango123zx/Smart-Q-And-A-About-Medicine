import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import type { MessengerWithRelations } from './MessengerSchema'
import type { MessengerPartialWithRelations } from './MessengerSchema'
import type { MessengerOptionalDefaultsWithRelations } from './MessengerSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'
import { MessengerWithRelationsSchema } from './MessengerSchema'
import { MessengerPartialWithRelationsSchema } from './MessengerSchema'
import { MessengerOptionalDefaultsWithRelationsSchema } from './MessengerSchema'

/////////////////////////////////////////
// BOX CHAT SCHEMA
/////////////////////////////////////////

export const BoxChatSchema = z.object({
  status: StatusSchema,
  boxChatId: z.string().cuid(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type BoxChat = z.infer<typeof BoxChatSchema>

/////////////////////////////////////////
// BOX CHAT PARTIAL SCHEMA
/////////////////////////////////////////

export const BoxChatPartialSchema = BoxChatSchema.partial()

export type BoxChatPartial = z.infer<typeof BoxChatPartialSchema>

/////////////////////////////////////////
// BOX CHAT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BoxChatOptionalDefaultsSchema = BoxChatSchema.merge(z.object({
  status: StatusSchema.optional(),
  boxChatId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type BoxChatOptionalDefaults = z.infer<typeof BoxChatOptionalDefaultsSchema>

/////////////////////////////////////////
// BOX CHAT RELATION SCHEMA
/////////////////////////////////////////

export type BoxChatRelations = {
  User: UserWithRelations;
  Messenger: MessengerWithRelations[];
};

export type BoxChatWithRelations = z.infer<typeof BoxChatSchema> & BoxChatRelations

export const BoxChatWithRelationsSchema: z.ZodType<BoxChatWithRelations> = BoxChatSchema.merge(z.object({
  User: z.lazy(() => UserWithRelationsSchema),
  Messenger: z.lazy(() => MessengerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BOX CHAT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type BoxChatOptionalDefaultsRelations = {
  User: UserOptionalDefaultsWithRelations;
  Messenger: MessengerOptionalDefaultsWithRelations[];
};

export type BoxChatOptionalDefaultsWithRelations = z.infer<typeof BoxChatOptionalDefaultsSchema> & BoxChatOptionalDefaultsRelations

export const BoxChatOptionalDefaultsWithRelationsSchema: z.ZodType<BoxChatOptionalDefaultsWithRelations> = BoxChatOptionalDefaultsSchema.merge(z.object({
  User: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  Messenger: z.lazy(() => MessengerOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BOX CHAT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BoxChatPartialRelations = {
  User?: UserPartialWithRelations;
  Messenger?: MessengerPartialWithRelations[];
};

export type BoxChatPartialWithRelations = z.infer<typeof BoxChatPartialSchema> & BoxChatPartialRelations

export const BoxChatPartialWithRelationsSchema: z.ZodType<BoxChatPartialWithRelations> = BoxChatPartialSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
  Messenger: z.lazy(() => MessengerPartialWithRelationsSchema).array(),
})).partial()

export type BoxChatOptionalDefaultsWithPartialRelations = z.infer<typeof BoxChatOptionalDefaultsSchema> & BoxChatPartialRelations

export const BoxChatOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BoxChatOptionalDefaultsWithPartialRelations> = BoxChatOptionalDefaultsSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
  Messenger: z.lazy(() => MessengerPartialWithRelationsSchema).array(),
}).partial())

export type BoxChatWithPartialRelations = z.infer<typeof BoxChatSchema> & BoxChatPartialRelations

export const BoxChatWithPartialRelationsSchema: z.ZodType<BoxChatWithPartialRelations> = BoxChatSchema.merge(z.object({
  User: z.lazy(() => UserPartialWithRelationsSchema),
  Messenger: z.lazy(() => MessengerPartialWithRelationsSchema).array(),
}).partial())

export default BoxChatSchema;
