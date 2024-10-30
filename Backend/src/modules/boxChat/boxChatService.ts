import { BoxChatRepository } from "./boxChat.repository";
import { HttpResponseBodySuccessDto } from "@/common/dtos";
import { Exception } from "@tsed/exceptions";
import { InternalServerException, NotFoundException } from "@/exceptions";
import { PaginationDto } from "@/common/dtos";

export class BoxChatService {
  constructor(private readonly boxChatRepository = new BoxChatRepository()) {}

  async getBoxChatById(boxChatId: string, userId: string) {
    try {
      const boxChat = await this.boxChatRepository.findBoxChatById(
        boxChatId,
        userId
      );
      if (!boxChat) {
        return new NotFoundException("boxChatId");
      }
      return { data: boxChat };
    } catch (error) {
      throw new InternalServerException();
    }
  }

  async getBoxsChatByUserId(
    userId: string,
    pagination: PaginationDto
  ): Promise<HttpResponseBodySuccessDto<any> | Exception> {
    try {
      const skip = (Number(pagination.page) - 1) * Number(pagination.limit);

      const [boxsChat, totalRecords] =
        await this.boxChatRepository.findBoxChatByUserId(
          userId,
          Number(pagination.page),
          Number(pagination.limit)
        );

      const totalPage = Math.ceil(totalRecords / Number(pagination.limit));
      return { data: boxsChat, totalPage: totalPage };
    } catch (error) {
      console.log(
        `🚀 ~ file: boxChatService.ts:39 ~ BoxChatService ~ error:`,
        error
      );

      throw new InternalServerException();
    }
  }
}
