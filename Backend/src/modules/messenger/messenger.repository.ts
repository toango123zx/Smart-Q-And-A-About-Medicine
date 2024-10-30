import { PrismaService } from "../database";

export class MessengerRepsitory {
  constructor(private readonly prismaService = new PrismaService()) {}

  async findMessengerById(userId: string, messengerId: string) {
    return await this.prismaService.messenger.findUnique({
      where: {
        messengerId: messengerId,
        status: "active",
        BoxChat: {
          userId: userId,
          status: "active",
        },
      },
    });
  }
}
