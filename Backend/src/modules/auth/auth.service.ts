import { UserRepository } from "../user/user.repository";
import { CreateUserDto } from "../user/schemas";
import {
  ConflictException,
  ForbiddenException,
  InternalServerException,
} from "../../exceptions";
import { compare, genSalt, hash } from "bcryptjs";
import { HttpResponseBodySuccessDto } from "../../common/dtos/httpResponseBodySuccess.dto";
import { Exception, NotFound } from "@tsed/exceptions";
import { UnauthorizedException } from "../../exceptions/unauthorized.exception";
import { sign } from "jsonwebtoken";
import { JWTConfig } from "../../config";
import { LoginRequestDto, LoginResponseDto } from "./schemas";

export class AuthService {
  constructor(private readonly userRepository = new UserRepository()) {}
  
  async register(
    userData: CreateUserDto
  ): Promise<HttpResponseBodySuccessDto<CreateUserDto> | Exception> {
    try {
      if (await this.userRepository.findUserByUsername(userData.username)) {
        return new ConflictException("Username");
      }
      if (await this.userRepository.findUserByEmail(userData.email)) {
        return new ConflictException("Email");
      }
      userData.dataOfBirth = new Date(userData.dataOfBirth);
      userData.salt = await genSalt();
      userData.password = await hash(userData.password, userData.salt);
      const newUser = await this.userRepository.createUser(userData);
      return { data: newUser };
    } catch (error) {
      return new InternalServerException();
    }
  }

  async login(
    loginData: LoginRequestDto
  ): Promise<HttpResponseBodySuccessDto<LoginResponseDto> | Exception> {
    try {
      const user = await this.userRepository.findUserByUsername(
        loginData.username
      );
      if (!user) {
        return new NotFound("Username");
      }

      const hashedPassword = await hash(loginData.password, user.salt);
      if (hashedPassword !== user.password) {
        return new UnauthorizedException();
      }

      const token = sign({ id: user.userId }, JWTConfig.JWT_SECRET_KEY, {
        expiresIn: JWTConfig.JWT_EXPIRATION_TIME,
      });

      return {
        data: {
          accessToken: token,
        },
      };
    } catch (error) {
      return new InternalServerException();
    }
  }
}
