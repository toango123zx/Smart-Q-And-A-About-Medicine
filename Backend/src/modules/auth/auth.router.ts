import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Router } from "express";
import { createApiResponse } from "../../swagger/openAPIResponseBuilders";
import { UserCreateInputSchema } from "../user/schemas";
import { HttpResponseBodySuccessDtoSchema } from "../../common/dtos";
import { AuthController } from "./auth.controller";
import { autoBind } from "../../common";
import { ShemaSwaggerDto } from "../../common/middlewares";
import { LoginRequestDtoSchema } from "./schemas";

export const authRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });

const authController = new AuthController();
autoBind(authController);

authRegistry.registerPath({
  method: "post",
  path: "/auth/register",
  tags: ["Auth"],
  request: {
    body: ShemaSwaggerDto(UserCreateInputSchema, "Create a new user"),
  },
  responses: createApiResponse(
    HttpResponseBodySuccessDtoSchema(null),
    "Success"
  ),
});
router.post("/register", authController.register);

authRegistry.registerPath({
  method: "post",
  path: "/auth/login",
  tags: ["Auth"],
  request: { body: ShemaSwaggerDto(LoginRequestDtoSchema, "Login") },
  responses: createApiResponse(
    HttpResponseBodySuccessDtoSchema(null),
    "Success"
  ),
});
router.post("/login", authController.login);

export const authRouter: Router = router;
