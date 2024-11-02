import express from "express";
import { AppModule } from "./app.module";
// const app = express();
// const port = 4200;

// app.get('/api', (req, res) => {
//     console.log('server being hit');
//   res.send('Hello from server!');
// });

import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
