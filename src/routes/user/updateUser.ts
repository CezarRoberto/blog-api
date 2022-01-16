import * as express from "express";
import { Response, Request } from "express";
import { User } from "../../entities/User";

const router = express.Router();

router.put(
  "/api/user/:userId/update",
  async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.params;
    const user = await User.findOne(parseInt(userId));
    if (!user) {
      return res.sendStatus(404);
    }
    const newUser = User.merge(user, req.body);
    const result = await User.save(newUser);
    return res.sendStatus(200).json(result);
  }
);

export { router as updateUserRouter };
