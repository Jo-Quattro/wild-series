import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.log(req.query);
  res.send(`Welcome to Wilder Series, ${req.query.name} !`);
};

export default { sayWelcome };
