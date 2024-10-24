import {
  healthCheckRegistry,
  healthCheckRouter,
} from "./healthChek/healthCheck.router";

export const Registries = [healthCheckRegistry];

export const Modules = { healthCheckRouter };
