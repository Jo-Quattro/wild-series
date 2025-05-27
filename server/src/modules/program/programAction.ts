// Some data to make the trick
import programRepository from "./programRepository";

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const programsFromDB = await programRepository.readAll();
  if (req.query.q != null) {
    const filteredPrograms = programsFromDB.filter((program) => {
      return (
        program.synopsis.includes(req.query.q as string) ||
        program.country.toLowerCase().includes(req.query.q as string) ||
        program.year.toString().includes(req.query.q as string)
      );
    });
    res.json(filteredPrograms);
  } else {
    res.json(programsFromDB);
  }
};

const read: RequestHandler = async (req, res) => {
  const programsFromDB = await programRepository.readAll();
  const parsedId = Number.parseInt(req.params.id);

  const program = programsFromDB.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
