import { User } from "@prisma/client";
import { PrismaService, Prisma } from "../database";
import { UserUpdateDto } from "./schemas/request/updateUser.request";

export class UserRepository {
  constructor(private readonly prismaService = new PrismaService()) {}

  async findUserById(userId: string): Promise<User | null> {
    return await this.prismaService.user.findFirst({
      where: {
        userId: userId,
        status: "active",
      },
    });
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async getAllUsers(skip: number, take: number): Promise<[User[], number]> {
    const [users, totalRecords] = await Promise.all([
      this.prismaService.user.findMany({
        where: {
          status: "active",
        },
        skip: skip,
        take: take,
        orderBy: {
          createdAt: "desc",
        },
      }),
      this.prismaService.user.count({
        where: {
          status: "active",
        },
      }),
    ]);
    return [users, totalRecords];
  }

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return await this.prismaService.user.create({
      data: user,
    });
  }

}
