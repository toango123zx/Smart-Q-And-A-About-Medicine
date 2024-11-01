import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'
import type { BoxChatWithRelations } from './BoxChatSchema'
import type { BoxChatPartialWithRelations } from './BoxChatSchema'
import type { BoxChatOptionalDefaultsWithRelations } from './BoxChatSchema'
import type { MessengerWithRelations } from './MessengerSchema'
import type { MessengerPartialWithRelations } from './MessengerSchema'
import type { MessengerOptionalDefaultsWithRelations } from './MessengerSchema'
import { BoxChatWithRelationsSchema } from './BoxChatSchema'
import { BoxChatPartialWithRelationsSchema } from './BoxChatSchema'
import { BoxChatOptionalDefaultsWithRelationsSchema } from './BoxChatSchema'
import { MessengerWithRelationsSchema } from './MessengerSchema'
import { MessengerPartialWithRelationsSchema } from './MessengerSchema'
import { MessengerOptionalDefaultsWithRelationsSchema } from './MessengerSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  status: StatusSchema,
  userId: z.string().cuid(),
  username: z.string(),
  password: z.string(),
  name: z.string().nullish(),
  email: z.string(),
  dataOfBirth: z.coerce.date(),
  phoneNumber: z.string(),
  address: z.string(),
  salt: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  status: StatusSchema.optional(),
  userId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  BoxChat: BoxChatWithRelations[];
  Messenger: MessengerWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatWithRelationsSchema).array(),
  Messenger: z.lazy(() => MessengerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
  BoxChat: BoxChatOptionalDefaultsWithRelations[];
  Messenger: MessengerOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatOptionalDefaultsWithRelationsSchema).array(),
  Messenger: z.lazy(() => MessengerOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
  BoxChat?: BoxChatPartialWithRelations[];
  Messenger?: MessengerPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatPartialWithRelationsSchema).array(),
  Messenger: z.lazy(() => MessengerPartialWithRelationsSchema).array(),
})).partial()

export type UserOptionalDefaultsWithPartialRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserPartialRelations

export const UserOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOptionalDefaultsWithPartialRelations> = UserOptionalDefaultsSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatPartialWithRelationsSchema).array(),
  Messenger: z.lazy(() => MessengerPartialWithRelationsSchema).array(),
}).partial())

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  BoxChat: z.lazy(() => BoxChatPartialWithRelationsSchema).array(),
  Messenger: z.lazy(() => MessengerPartialWithRelationsSchema).array(),
}).partial())

export default UserSchema;
