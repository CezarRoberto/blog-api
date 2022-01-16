import express from "express";
import { Request, Response } from "express";
import { Post } from "../../entities/Post";
import { User } from "../../entities/User";

const router = express.Router();

router.post(
  "/api/user/:userId/post/create",
  async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.params;
    const { title, description, type } = req.body;

    const user = await User.findOne(parseInt(userId));
    if (!user) {
      return res.sendStatus(404);
    }

    const post = Post.create({
      title: title,
      description: description,
      type: type,
    });
    await Post.save(post);
    return res.json(post);
  }
);

export { router as createPostRouter };
