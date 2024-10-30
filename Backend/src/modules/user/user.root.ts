import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Router } from "express";
import { autoBind } from "../../common";
import { UserController } from "./user.controller";

import authMiddleware from "@/common/middlewares/auth.middleware";

// const PostProjectSchema = ProjectSchema.omit({ id: true, archived: true });

export const projectRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });

const userController = new UserController();
autoBind(userController);

router.get("/", authMiddleware.verifyToken, userController.getInformationUser);
router.get("/all", userController.getAllUsers);
router.patch(
  "/",
  authMiddleware.verifyToken,
  userController.updateInformationUser
);

export const userRouter: Router = router;
