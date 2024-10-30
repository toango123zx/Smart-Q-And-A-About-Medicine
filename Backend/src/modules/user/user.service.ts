import { InternalServerException, NotFoundException } from "@/exceptions";
import { UserRepository } from "./user.repository";
import { HttpResponseBodySuccessDto } from "@/common/dtos/httpResponseBodySuccess.dto";
import { GetInformationUserResponseDto, UserResponsseDto } from "./schemas";
import { Exception } from "@tsed/exceptions";
import { PaginationDto } from "@/common/dtos/pagination.dto";
import { UserUpdateDto } from "./schemas/request/updateUser.request";

export class UserService {
  constructor(private readonly userRepository = new UserRepository()) {}

  async getAllUsers(
    pagination: PaginationDto
  ): Promise<HttpResponseBodySuccessDto<any> | Exception> {
    try {
      const skip = (Number(pagination.page) - 1) * Number(pagination.limit);

      const [users, totalRecords] = await this.userRepository.getAllUsers(
        Number(skip),
        Number(pagination.limit)
      );

      const totalPage = Math.ceil(totalRecords / Number(pagination.limit));
      return { data: users, totalPage: totalPage };
    } catch (error) {
      throw new InternalServerException();
    }
  }

  async getInformationUser(
    id: string
  ): Promise<HttpResponseBodySuccessDto<any> | Exception> {
    try {
      const user = await this.userRepository.findUserById(id);

      if (!user) {
        return new NotFoundException("userId");
      }

      return { data: user };
    } catch (error) {
      throw new InternalServerException();
    }
  }

  async updateInformationUser(userId: string, userData: UserUpdateDto): Promise<HttpResponseBodySuccessDto<UserResponsseDto> | Exception> {
    try {
      const user = await this.userRepository.findUserById(userId);

      if (!user) {
        return new NotFoundException("userId");
      }

      const updatedUser = await this.userRepository.updateUser(
        userId,
        userData
      );
      return { data: updatedUser };
    } catch (error) {
      throw new InternalServerException();
    }
  }
}
