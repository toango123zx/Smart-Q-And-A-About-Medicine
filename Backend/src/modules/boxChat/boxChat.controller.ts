import { Request, Response } from "express";

import httpResponseDto from "@/common/dtos/httpResponse.dto";
import { HttpResponseBodySuccessDto } from "@/common/dtos";
import { Exception } from "@tsed/exceptions";
import { BoxChatService } from "./boxChatService";
import { PaginationDto } from "@/common/dtos";
import { GetApiConfig } from "@/config";

export class BoxChatController {
  constructor(private readonly boxChatService = new BoxChatService()) {}

  async getBoxChatById(req: Request, res: Response) {
    const boxChatId = req.params.id;
    const userId = req.body.userId;

    const result = await this.boxChatService.getBoxChatById(boxChatId, userId);

    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }

  async getBoxsChatByUserId(req: Request, res: Response) {
    const userId = req.body.userId;
    let pagination = req.query as unknown as PaginationDto;
    if (!pagination.page) {
      pagination.page = Number(GetApiConfig.defaultPage);
      pagination.limit = Number(GetApiConfig.defaultLimitPage);
    }

    const result = await this.boxChatService.getBoxsChatByUserId(
      userId,
      pagination
    );
    if (result instanceof Exception) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }
}