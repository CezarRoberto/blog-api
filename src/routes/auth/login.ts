import express from "express";
import e, { Request, Response } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcrypt";
import { getRepository } from "typeorm";

const router = express.Router();

router.post("/api/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: any = await User.findOne({ where: { email } });
  debugger;
  if (!user) {
    res.sendStatus(401);
  }
  const validate = await bcrypt.compare(password, user.password);
  if (!validate) {
    res.sendStatus(406);
  }
  res.send(user);
});

export { router as LoginRouter };
