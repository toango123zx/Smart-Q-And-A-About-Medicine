import { Prisma } from "@prisma/client";
import { User } from "@prisma/client";
import UserSelectSchema from "../../../models/inputTypeSchemas/UserSelectSchema";
import { z } from "zod";

export interface UserDto extends User {}
export const userSchema = UserSelectSchema
// export const userSchema = z.object({
//     body: UserSelectSchema,
//   });
  // export const CreateBoardSchema = z.object({
  //   title: z.string(),
  //   description: z.string(),
  //   coverUrl: z.string().max(255),
  // });

  // export const PostBoardsSchema = z.object({
  //   body: UserSelectSchema,
  // });

  // export const BoardSchema = z.object({
  //   id: z.string(),
  //   title: z.string(),
  //   description: z.string(),
  //   coverUrl: z.string().max(255),
  //   archived: z.boolean(),
  //   createdAt: z.date(),
  //   updatedAt: z.date(),
  // });