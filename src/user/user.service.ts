import { User, Role } from "../models/user-model";

import { Request } from "express";
import { bcrypt } from "bcrypt";

export class UserService {
  constructor() {}

  async getUser(request: Request): Promise<User> {
    console.log("hitting get user");
    return {
      first_name: "Test1",
      last_name: "Test",
      email: "test",
      password: "test",
      role: UserType.DESIGNER,
      id: "1",
      created_at: "Date.now()",
      updated_at: "Date.now()",
    };
  }

  async storeUser(body): Promise<User> {
    const newUser = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password,
      role: "user",
      created_at: new Date(),
      updated_at: new Date(),
    });

    const userData = {
      email: newUser.email,
      password: body.password, // encrypt with bcrypt after test
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      role: newUser.role,
      created_at: newUser.created_at,
      updated_at: newUser.updated_at,
    };

    console.log("User saved successfully:", userData);
    return userData; //
  }
  catch(error) {
    console.error("Error saving user:", error);
    return { error: "Error saving user" };
  }
}
