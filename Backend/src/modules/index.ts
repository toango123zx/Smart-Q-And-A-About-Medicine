import { authRegistry, authRouter } from "./auth/auth.router";
import {
  healthCheckRegistry,
  healthCheckRouter,
} from "./healthChek/healthCheck.router";

export const Registries = [healthCheckRegistry, authRegistry];

export const Modules = { healthCheckRouter, authRouter};
