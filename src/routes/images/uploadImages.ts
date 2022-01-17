import express from "express";
import { Request, Response } from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../images/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/api/upload",
  upload.single("file"),
  (req: Request, res: Response) => {
    res.sendStatus(200).json("File has been uploaded");
  }
);

export { router as uploadFilesRouter };
