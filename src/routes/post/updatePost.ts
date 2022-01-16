import express from "express";
import { Request, Response } from "express";
import { Post } from "../../entities/Post";
const router = express.Router();

router.put(
  "/api/post/:postId/update",
  async (req: Request, res: Response): Promise<Response> => {
    const { postId } = req.params;
    const post = await Post.findOne(parseInt(postId));
    if (!post) {
      return res.sendStatus(404);
    }
    const newPost = Post.merge(post, req.body);
    const result = await Post.save(newPost);
    return res.sendStatus(200).json(result);
  }
);


export { router as updatePostRouter};