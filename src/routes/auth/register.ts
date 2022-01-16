import express from "express";
import { Request, Response } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcrypt";

const router = express.Router();

router.post(
  "/api/register",
  async (req: Request, res: Response): Promise<Response> => {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    if (!(await user.save())) {
      return res.status(500).send({ msg: "Error" });
    }
    return res.json(user).status(200);
  }
);

export { router as RegisterRouter };
