import "reflect-metadata";

import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";

import { openAPIRouter } from "./swagger";
import { env } from "./config";
import { errorHandler } from "./common";
import { Modules } from "./modules";
import { authRouter } from "./modules/auth/auth.router";

const app: Express = express();

app.use(express.json());

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(morgan('combined'));

app.use('/health-check', Modules.healthCheckRouter);
app.use('/auth', authRouter);

app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());


app.listen(env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = env;
  console.log(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
});
