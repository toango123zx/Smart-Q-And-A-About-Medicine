import { HttpResponseBodySuccessDto } from "@/common";
import { MessengerRepsitory } from "./messenger.repository";
import { Exception } from "@tsed/exceptions";
import { InternalServerException, NotFoundException } from "@/exceptions";
import { Messenger, User } from "@prisma/client";
import { BoxChatRepository } from "../boxChat/boxChat.repository";

export class MessengerService {
  constructor(
    private readonly messengerRepository = new MessengerRepsitory(),
    private readonly boxChatRespository = new BoxChatRepository()
  ) {}

  async findMessengerById(
    userId: string,
    messengerId: string
  ): Promise<HttpResponseBodySuccessDto<any> | Exception> {
    try {
      const messenger = await this.messengerRepository.findMessengerById(
        userId,
        messengerId
      );
      if (!messenger) {
        return new NotFoundException("messengerId");
      }
      return { data: messenger };
    } catch (error) {
      throw new InternalServerException();
    }
  }

  async createMessenger(
    userId: string,
    boxChatId: string,
    content: string
  ): Promise<HttpResponseBodySuccessDto<Messenger> | Exception> {
    try {
      const boxChat = await this.boxChatRespository.findBoxChatById(
        boxChatId,
        userId
      );

      if (!boxChat) {
        return new NotFoundException("boxChatId");
      }

      const messenger = await this.messengerRepository.createMessenger(
        userId,
        boxChatId,
        content
      );
      return { data: messenger };
    } catch (error) {
      throw new InternalServerException();
    }
  }

  async deleteMessenger(userId: string, messengerId: string) {
    try {
      const messenger = await this.messengerRepository.findMessengerById(
        userId,
        messengerId
      );

      if (!messenger) {
        return new NotFoundException("messengerId");
      }

      const deleteMessenger = await this.messengerRepository.deleteMessenger(
        userId,
        messengerId
      );
      return { data: deleteMessenger };
    } catch (error) {
      throw new InternalServerException();
    }
  }
}
