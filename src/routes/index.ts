import express from "express";
import { userRouter } from "./user.route";
import { testRouter } from "./test.route";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(testRouter);
  app.use(userRouter);
};
