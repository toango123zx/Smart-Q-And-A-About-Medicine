import { Request, Response } from "express";
import { CreateUserDto } from "../user/schemas";
import { AuthService } from "./auth.service";
import { Exception } from "@tsed/exceptions";
import httpResponseDto from "../../common/dtos/httpResponse.dto";
import { HttpResponseBodySuccessDto } from "../../common/dtos";
import { LoginRequestDto, LoginResponseDto } from "./schemas";

export class AuthController {
  constructor(private readonly authService = new AuthService()) {}

  async register(req: Request, res: Response) {
    const userData = req.body as CreateUserDto;
    const result = await this.authService.register(userData);

    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<CreateUserDto>(
      result as HttpResponseBodySuccessDto<CreateUserDto>,
      res
    );
  }

  async login(req: Request, res: Response) {
    const loginData = req.body as LoginRequestDto;
    const result = await this.authService.login(loginData);

    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success(
      result as HttpResponseBodySuccessDto<LoginResponseDto>,
      res
    );
  }
}
