import * as express from "express";
import { Response, Request } from "express";
import { User } from "../../entities/User";

const router = express.Router();

router.delete(
  "/api/user/:userId/delete",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const { userId } = req.params;
      const response = await User.delete(userId);
      return res.sendStatus(200);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
);

export { router as deleteUserRouter };
