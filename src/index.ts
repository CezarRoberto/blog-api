import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { createUserRouter } from "./routes/user/createUser";
import { RegisterRouter } from "./routes/auth/register";
import { LoginRouter } from "./routes/auth/login";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import bodyParser from "body-parser";

const app = express();

async function main() {
  try {
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123456",
      database: "blog-server",
      entities: [User, Post],
      synchronize: true,
      logging: false,
    });
    if (connection) {
      console.log("Connected Sucessful");
    }
    app.use(bodyParser.json());
    app.use(createUserRouter);
    app.use(RegisterRouter);
    app.use(LoginRouter);
  } catch (error) {
    console.log(error);
  }

  app.listen(8000, () => {
    console.log("Now running on port 8000");
  });
}

main();
