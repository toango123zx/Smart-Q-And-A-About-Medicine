import { z } from "zod";

export const GetInformationUserResponseDtoSchema = z.object({
  id: z.string(),
});
