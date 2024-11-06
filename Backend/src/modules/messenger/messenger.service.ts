import { HttpResponseBodySuccessDto } from "@/common";
import { MessengerRepsitory } from "./messenger.repository";
import { Exception } from "@tsed/exceptions";
import { InternalServerException, NotFoundException } from "@/exceptions";
import { Messenger, User } from "@prisma/client";
import { BoxChatRepository } from "../boxChat/boxChat.repository";
import { SpokeAIHelper } from "@/helpers";
import { UserRepository } from "../user/user.repository";

export class MessengerService {
  constructor(
    private readonly userRepository = new UserRepository(),
    private readonly messengerRepository = new MessengerRepsitory(),
    private readonly boxChatRespository = new BoxChatRepository(),
    private readonly spokeAIHelper = new SpokeAIHelper()
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
      const responseSpoke = await this.spokeAIHelper.axiosSpokeAIResponse(
        content
      );
      const systemSpokeAI = await this.userRepository.findUserByUsername(
        "systemSpokeAI"
      );
      if (!systemSpokeAI) {
        return new NotFoundException("systemSpokeAI");
      }
      const responseSpokeMessenger = await this.messengerRepository.createMessenger(systemSpokeAI.userId, boxChatId, responseSpoke);

      return { data: responseSpokeMessenger };
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
