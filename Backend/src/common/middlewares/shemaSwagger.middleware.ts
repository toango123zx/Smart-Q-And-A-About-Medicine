import { ZodMediaTypeObject, ZodRequestBody } from "@asteasolutions/zod-to-openapi";
import { ZodType } from "zod";

// export class ShemaSwaggerDto implements ZodRequestBody {
//     content: Partial<Record<ZodMediaType, ZodMediaTypeObject>>;
//     description?: string;

//     constructor(
//         private readonly schema: ZodType<unknown>,
//         private readonly descriptionShema?: string,
//     ) {
//         this.description = this.descriptionShema;
//         this.content = {
//             "application/json": {
//                 schema: this.schema,
//             },
//         };
//     }
// }

export const ShemaSwaggerDto = (schema: ZodType<unknown>, descriptionShema?: string): ZodRequestBody => {
    return {
        description: descriptionShema,
        content: {
            "application/json": {
                schema: schema,
            },
        },
    };
};