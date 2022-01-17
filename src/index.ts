import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { findUsersRouter } from "./routes/user/findUsers";
import { RegisterRouter } from "./routes/auth/register";
import { LoginRouter } from "./routes/auth/login";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import bodyParser from "body-parser";
import { findOneUserRouter } from "./routes/user/findOneUser";
import { updateUserRouter } from "./routes/user/updateUser";
import { createPostRouter } from "./routes/post/createPost";
import { deleteUserRouter } from "./routes/user/deleteUser";
import { deletePostRouter } from "./routes/post/deletePost";
import { findOnePostRouter } from "./routes/post/findOnePost";
import { findPostsRouter } from "./routes/post/findPosts";
import { updatePostRouter } from "./routes/post/updatePost";
import { uploadFilesRouter } from "./routes/images/uploadImages";

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
    // AUTH
    app.use(RegisterRouter);
    app.use(LoginRouter);

    // USER
    app.use(findUsersRouter);
    app.use(findOneUserRouter);
    app.use(updateUserRouter);
    app.use(deleteUserRouter);

    // POST
    app.use(createPostRouter);
    app.use(updatePostRouter);
    app.use(deletePostRouter);
    app.use(findPostsRouter);
    app.use(findOnePostRouter);

    // FILES
    app.use(uploadFilesRouter);
  } catch (error) {
    console.log(error);
  }

  app.listen(8000, () => {
    console.log("Now running on port 8000");
  });
}

main();
