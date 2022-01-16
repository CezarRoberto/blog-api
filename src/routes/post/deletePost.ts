import express from "express";
import { Request, Response } from "express";
import { Post } from "../../entities/Post";

const router = express.Router();


router.delete(
  "/api/post/:postId/delete",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { postId } = req.params;
      const response = await Post.delete(postId);
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
);

export { router as deletePostRouter };
