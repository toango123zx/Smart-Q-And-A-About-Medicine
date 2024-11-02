import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { Router } from "express";
import { autoBind } from "../../common";
import { BoxChatController } from "./boxChat.controller";
import authMiddleware from "@/common/middlewares/auth.middleware";


export const boxChatRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });
 
const boxChatController = new BoxChatController();
autoBind(boxChatController);

router.get("/", authMiddleware.verifyToken, boxChatController.getBoxsChatByUserId);
router.get("/:id", authMiddleware.verifyToken, boxChatController.getBoxChatById);
router.post("/", authMiddleware.verifyToken, boxChatController.createBoxChat);
router.patch("/:id", authMiddleware.verifyToken, boxChatController.updateNameBoxChat);
router.delete("/:id", authMiddleware.verifyToken, boxChatController.deleteBoxChat);

export const boxChatRouter: Router = router;
