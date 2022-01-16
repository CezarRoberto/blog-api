import * as express from "express";
import { Response, Request } from "express";
import { User } from "../../entities/User";

const router = express.Router();

router.get(
  "/api/users",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await User.find({
        select: ["username", "email", "profilePic", "id",],
      });
      return res.send(users);
    } catch (error) {
      return res.sendStatus(404);
    }
  }
);

export { router as findUsersRouter };
