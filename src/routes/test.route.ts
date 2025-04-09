import express, { Request, Response } from "express";

export const testRouter = express.Router();

testRouter.get("/test", (req: Request, res: Response) => {
  res.send({ message: "Api está ativa e funcional!" });
});
