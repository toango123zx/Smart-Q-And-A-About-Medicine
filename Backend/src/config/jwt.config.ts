import dotenv from 'dotenv';

dotenv.config();

export const JWTConfig = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "secret",
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME || "365d",
}