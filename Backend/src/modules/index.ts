import { authRegistry, authRouter } from "./auth/auth.router";
import {
  healthCheckRegistry,
  healthCheckRouter,
} from "./healthChek/healthCheck.router";
import { userRouter } from "./user/user.root";

export const Registries = [healthCheckRegistry, authRegistry];

export const Modules = { healthCheckRouter, authRouter, userRouter };
