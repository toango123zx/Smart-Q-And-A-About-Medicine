import httpResponseDto from "@/common/dtos/httpResponse.dto";
import { MessengerService } from "./messenger.service";
import { HttpResponseBodySuccessDto } from "@/common";

export class MessengerController {
  constructor(private readonly messengerService = new MessengerService()) {}

  async findMessengerById(req: any, res: any) {
    const userId = req.body.userId;
    const messengerId = req.params.id;

    const result = await this.messengerService.findMessengerById(
      userId,
      messengerId
    );
    if (result instanceof Error) {
      httpResponseDto.exception(result, res);
    }
    httpResponseDto.success<any>(
      result as HttpResponseBodySuccessDto<any>,
      res
    );
  }
}
