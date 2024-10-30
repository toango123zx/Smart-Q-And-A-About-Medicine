import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Router } from "express";
import { HttpResponseBodySuccessDtoSchema } from "../../common/dtos/httpResponseBodySuccess.dto";
import { autoBind, ShemaSwaggerDto } from "../../common";
import { UserController } from "./user.controller";
import { z } from "zod";
import { createApiResponse } from "@/swagger";
import { UserCreateInputSchema } from "./schemas";

// const PostProjectSchema = ProjectSchema.omit({ id: true, archived: true });

export const projectRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });

const userController = new UserController();
autoBind(userController);

router.get("", userController.getAllUsers);
router.get("/:id", userController.getInformationUser);
router.patch("/:id", userController.updateInformationUser);

export const userRouter: Router = router;
