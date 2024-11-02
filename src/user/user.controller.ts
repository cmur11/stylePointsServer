import { Controller, Get } from "@nestjs/common";
import { Endpoint } from "../endpoint";
import { UserService } from "./user.service";
import { User } from "../models/user-model";
import { Request } from "express";
@Controller(Endpoint.User)
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  public async getUser(request: Request): Promise<User> {
    console.log("hitting get user controller");
    const user = await this.userService.getUser(request);
    return user;
  }
}
