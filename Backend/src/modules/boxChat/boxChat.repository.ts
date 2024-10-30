import { PrismaService } from "../database";

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
}
