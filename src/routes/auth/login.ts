import express from "express";
import { Request, Response } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcrypt";

const router = express.Router();

router.post(
  "/api/login",
  async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const user: any = await User.findOne({ where: { email } });
    debugger;
    if (!user) {
      return res.sendStatus(401);
    }
    const validate = await bcrypt.compare(password, user.password);
    if (!validate) {
      return res.sendStatus(406);
    }
    return res.send(user);
  }
);

export { router as LoginRouter };
