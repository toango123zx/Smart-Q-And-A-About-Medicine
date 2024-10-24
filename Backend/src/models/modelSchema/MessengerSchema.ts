import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'
import type { BoxChatWithRelations } from './BoxChatSchema'
import type { BoxChatPartialWithRelations } from './BoxChatSchema'
import type { BoxChatOptionalDefaultsWithRelations } from './BoxChatSchema'
import type { UserWithRelations } from './UserSchema'
import type { UserPartialWithRelations } from './UserSchema'
import type { UserOptionalDefaultsWithRelations } from './UserSchema'
import { BoxChatWithRelationsSchema } from './BoxChatSchema'
import { BoxChatPartialWithRelationsSchema } from './BoxChatSchema'
import { BoxChatOptionalDefaultsWithRelationsSchema } from './BoxChatSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { UserPartialWithRelationsSchema } from './UserSchema'
import { UserOptionalDefaultsWithRelationsSchema } from './UserSchema'

/////////////////////////////////////////
// MESSENGER SCHEMA
/////////////////////////////////////////

export const MessengerSchema = z.object({
  status: StatusSchema,
  messengerId: z.string().cuid(),
  content: z.string(),
  boxChatId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deleteAt: z.coerce.date().nullish(),
})

export type Messenger = z.infer<typeof MessengerSchema>

/////////////////////////////////////////
// MESSENGER PARTIAL SCHEMA
/////////////////////////////////////////

export const MessengerPartialSchema = MessengerSchema.partial()

export type MessengerPartial = z.infer<typeof MessengerPartialSchema>

/////////////////////////////////////////
// MESSENGER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MessengerOptionalDefaultsSchema = MessengerSchema.merge(z.object({
  status: StatusSchema.optional(),
  messengerId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type MessengerOptionalDefaults = z.infer<typeof MessengerOptionalDefaultsSchema>

/////////////////////////////////////////
// MESSENGER RELATION SCHEMA
/////////////////////////////////////////

export type MessengerRelations = {
  BoxChat: BoxChatWithRelations;
  User: UserWithRelations;
};

export type MessengerWithRelations = z.infer<typeof MessengerSchema> & MessengerRelations

export const MessengerWithRelationsSchema: z.ZodType<MessengerWithRelations> = MessengerSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatWithRelationsSchema),
  User: z.lazy(() => UserWithRelationsSchema),
}))

/////////////////////////////////////////
// MESSENGER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type MessengerOptionalDefaultsRelations = {
  BoxChat: BoxChatOptionalDefaultsWithRelations;
  User: UserOptionalDefaultsWithRelations;
};

export type MessengerOptionalDefaultsWithRelations = z.infer<typeof MessengerOptionalDefaultsSchema> & MessengerOptionalDefaultsRelations

export const MessengerOptionalDefaultsWithRelationsSchema: z.ZodType<MessengerOptionalDefaultsWithRelations> = MessengerOptionalDefaultsSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatOptionalDefaultsWithRelationsSchema),
  User: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// MESSENGER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type MessengerPartialRelations = {
  BoxChat?: BoxChatPartialWithRelations;
  User?: UserPartialWithRelations;
};

export type MessengerPartialWithRelations = z.infer<typeof MessengerPartialSchema> & MessengerPartialRelations

export const MessengerPartialWithRelationsSchema: z.ZodType<MessengerPartialWithRelations> = MessengerPartialSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatPartialWithRelationsSchema),
  User: z.lazy(() => UserPartialWithRelationsSchema),
})).partial()

export type MessengerOptionalDefaultsWithPartialRelations = z.infer<typeof MessengerOptionalDefaultsSchema> & MessengerPartialRelations

export const MessengerOptionalDefaultsWithPartialRelationsSchema: z.ZodType<MessengerOptionalDefaultsWithPartialRelations> = MessengerOptionalDefaultsSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatPartialWithRelationsSchema),
  User: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export type MessengerWithPartialRelations = z.infer<typeof MessengerSchema> & MessengerPartialRelations

export const MessengerWithPartialRelationsSchema: z.ZodType<MessengerWithPartialRelations> = MessengerSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatPartialWithRelationsSchema),
  User: z.lazy(() => UserPartialWithRelationsSchema),
}).partial())

export default MessengerSchema;
