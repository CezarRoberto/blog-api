import express from "express";
import { Request, Response } from "express";
import { Post } from "../../entities/Post";

const router = express.Router();

router.get(
  "/api/post/:postId",
  async (req: Request, res: Response): Promise<Response> => {
    const {postId} = req.params;
    try{
      const posts = await Post.findOne(parseInt(postId))
      return res.json(posts)
    }catch(error){
      return res.sendStatus(404)
    }
  });

export { router as findOnePostRouter };
