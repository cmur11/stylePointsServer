import express from "express";
import { AppModule } from "./app.module";
// import { Sequelize, Model, DataTypes } from "sequelize";
import { NestFactory } from "@nestjs/core";
const bodyParser = require("body-parser");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "path/to/database.sqlite",
// });

// export class User extends Model {}
// User.init(
//   {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   },
//   { sequelize, modelName: "user" }
// );

// Sync models with database
// sequelize.sync();

// Middleware for parsing request body

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
