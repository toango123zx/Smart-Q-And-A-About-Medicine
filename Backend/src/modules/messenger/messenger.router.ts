import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Router } from "express";
import { autoBind } from "../../common";

import authMiddleware from "@/common/middlewares/auth.middleware";
import { MessengerController } from "./messenger.controller";

// const PostProjectSchema = ProjectSchema.omit({ id: true, archived: true });

export const messengerRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });

const messengerController = new MessengerController();
autoBind(messengerController);

router.get(
  "/:id",
  authMiddleware.verifyToken,
  messengerController.findMessengerById
);
router.post(
  "/",
  authMiddleware.verifyToken,
  messengerController.createMessenger
);
router.delete(
  "/:id",
  authMiddleware.verifyToken,
  messengerController.deleteMessenger
);

export const messengerRouter: Router = router;
