import { User } from "@prisma/client";
import { PrismaService, Prisma } from "../database";

export class UserRepository {
  constructor(private readonly prismaService = new PrismaService()) {}

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

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return await this.prismaService.user.create({
      data: user,
    });
  }
  
  async test() {
    return "test";
  }
}
