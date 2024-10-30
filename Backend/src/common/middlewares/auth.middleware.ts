import { JWTConfig } from "@/config";
import { Request, Response, NextFunction } from "express";
import { JsonWebTokenError, verify } from "jsonwebtoken";
import httpResponseDto from "../dtos/httpResponse.dto";
import { UnauthorizedException } from "@/exceptions/unauthorized.exception";
import { InternalServerException } from "@/exceptions";

class AuthMiddleware {
  constructor() {}

  async verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = req.headers["authorization"]?.split(" ")[1];

      if (!accessToken) {
        res.status(402).send("Access token is required");
        return;
      }

      const userId = verify(accessToken, JWTConfig.JWT_SECRET_KEY);
      req.body.userId = userId;
      next();
      return;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        httpResponseDto.exception(
          new UnauthorizedException(error.message),
          res
        );
        return;
      }
      httpResponseDto.exception(new InternalServerException(), res);
    }
  }
}

export default new AuthMiddleware();
