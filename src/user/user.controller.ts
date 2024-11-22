import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { Endpoint } from "../endpoint";
import { UserService } from "./user.service";
import { User } from "../models/user-model";
import { Request } from "express";
@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get(Endpoint.User)
  public async getUser(request: Request): Promise<User> {
    console.log("request", request);
    const user = await this.userService.getUser(request);
    return user;
  }
  @Post(Endpoint.UserAdd)
  public async storeUser(@Body() body): Promise<string> {
    console.log("body", body);
    return this.userService.storeUser(body);
  }
}
