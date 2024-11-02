import { User } from "../models/user-model";
import { Request } from "express";
export class UserService {
  constructor() {}

  async getUser(request: Request): Promise<User> {
    console.log("hitting user");
    return { age: "24", firstName: "Test1", lastName: "Test" };
  }
}
