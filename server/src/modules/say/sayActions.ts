import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (_req, res) => {
  res.send("Welcome to Wilder Series");
};

export default { sayWelcome };
