import httpResponseDto from "@/common/dtos/httpResponse.dto";
import { MessengerService } from "./messenger.service";
import { HttpResponseBodySuccessDto } from "@/common";
import { Request, Response } from "express";

export class MessengerController {
  constructor(private readonly messengerService = new MessengerService()) {}

  async findMessengerById(req: Request, res: Response) {
    const userId = req.body.userId;
    const messengerId = req.params.id;

    const result = await this.messengerService.findMessengerById(
      userId,
      messengerId
    );
    if (result instanceof Error) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }

  async createMessenger(req: Request, res: Response) {
    const userId = req.body.userId;
    const { boxChatId, content } = req.body;
    const result = await this.messengerService.createMessenger(
      userId,
      boxChatId,
      content
    );
    if (result instanceof Error) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }

  async deleteMessenger(req: Request, res: Response) {
    const userId = req.body.userId;
    const messengerId = req.params.id;
    const result = await this.messengerService.deleteMessenger(
      userId,
      messengerId
    );
    if (result instanceof Error) {
      httpResponseDto.exception(result, res);
      return;
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }
}
