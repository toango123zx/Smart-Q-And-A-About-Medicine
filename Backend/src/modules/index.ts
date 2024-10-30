import { authRegistry, authRouter } from "./auth/auth.router";
import { boxChatRouter } from "./boxChat/boxChat.router";
import {
  healthCheckRegistry,
  healthCheckRouter,
} from "./healthChek/healthCheck.router";
import { messengerRouter } from "./messenger/messenger.router";
import { userRouter } from "./user/user.root";

export const Registries = [healthCheckRegistry, authRegistry];

export const Modules = {
  healthCheckRouter,
  authRouter,
  userRouter,
  boxChatRouter,
  messengerRouter,
};
