import { HttpResponseBodySuccessDto } from "@/common";
import { MessengerRepsitory } from "./messenger.repository";
import { Exception } from "@tsed/exceptions";
import { InternalServerException, NotFoundException } from "@/exceptions";

export class MessengerService {
  constructor(
    private readonly messengerRepository = new MessengerRepsitory()
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
}
