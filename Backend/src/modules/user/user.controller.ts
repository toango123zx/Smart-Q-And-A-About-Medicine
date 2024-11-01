import { Request, Response } from "express";
import { Exception } from "@tsed/exceptions";
import httpResponseDto from "../../common/dtos/httpResponse.dto";
import { HttpResponseBodySuccessDto } from "../../common/dtos/httpResponseBodySuccess.dto";
import { UserService } from "./user.service";
import { PaginationDto } from "@/common/dtos/pagination.dto";
import { GetApiConfig } from "@/config/getApi.config";
import { UserResponsseDto } from "./schemas";

export class UserController {
  constructor(private readonly userService = new UserService()) { }

  async getAllUsers(req: Request, res: Response) {
    let pagination = req.query as unknown as PaginationDto;
    if (!pagination.page) {
      pagination.page = Number(GetApiConfig.defaultPage);
      pagination.limit = Number(GetApiConfig.defaultLimitPage);
    }

    const result = await this.userService.getAllUsers(pagination);
    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }

  async getInformationUser(req: Request, res: Response) {
    const userId = req.params.id;
    const result = await this.userService.getInformationUser(userId);

    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }

  async updateInformationUser(req: Request, res: Response) {
    const userId = req.params.id;
    const userData = req.body;
    const result = await this.userService.updateInformationUser(
      userId,
      userData
    );

    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<UserResponsseDto>(
      result as HttpResponseBodySuccessDto<UserResponsseDto>,
      res
    );
  }
}