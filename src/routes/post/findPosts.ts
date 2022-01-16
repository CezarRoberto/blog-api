import express from "express";
import { Request, Response } from "express";
import { Post } from "../../entities/Post";

const router = express.Router();

router.get(
  "/api/posts",
  async (req: Request, res: Response): Promise<Response> => {
    try{
      const posts = await Post.find()
      return res.json(posts)
    }catch(error){
      return res.sendStatus(404)
    }
  });

export { router as findPostsRouter };
