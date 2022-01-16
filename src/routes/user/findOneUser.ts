import * as express from "express";
import { Response, Request } from "express";
import { User } from "../../entities/User";

const router = express.Router();

router.get(
  "/api/user/:userId",
  async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.params;
    const client = await User.findOne(parseInt(userId));
    return res.json(client);
  }
);

export { router as findOneUserRouter };
