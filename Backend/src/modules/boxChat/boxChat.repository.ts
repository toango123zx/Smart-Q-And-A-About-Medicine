import { PrismaService } from "../database";
import { BoxChatCreateRequestDto } from "./schemas";

export class BoxChatRepository {
  constructor(private readonly prismaService = new PrismaService()) {}

  async findBoxChatById(boxChatId: string, userId: string) {
    return await this.prismaService.boxChat.findUnique({
      include: {
        Messenger: true,
      },
      where: {
        boxChatId: boxChatId,
        userId: userId,
        status: "active",
      },
    });
  }

  async findBoxChatByUserId(
    userId: string,
    skip: number,
    take: number
  ): Promise<[any[], number]> {
    const [BoxsChat, totalRecords] = await Promise.all([
      this.prismaService.boxChat.findMany({
        where: {
          userId: userId,
          status: "active",
        },
        skip: skip,
        take: take,
        orderBy: {
          createdAt: "desc",
        },
      }),
      this.prismaService.boxChat.count({
        where: {
          userId: userId,
          status: "active",
        },
      }),
    ]);
    return [BoxsChat, totalRecords];
  }

  async createBoxChat(boxChat: BoxChatCreateRequestDto) {
    return await this.prismaService.boxChat.create({
      data: boxChat,
    });
  }

  async updateNameBoxChat(userId: string, boxChatId: string, name: string) {
    return await this.prismaService.boxChat.update({
      where: {
        boxChatId: boxChatId,
        userId: userId,
        status: "active",
      },
      data: {
        name: name,
      },
    });
  }

  async deleteBoxChat(userId: string, boxChatId: string) {
    return await this.prismaService.boxChat.update({
      where: {
        boxChatId: boxChatId,
        userId: userId,
        status: "active",
      },
      data: {
        status: "inactive",
      },
    });
  }
}
