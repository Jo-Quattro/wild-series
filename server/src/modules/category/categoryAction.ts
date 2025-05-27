// Some data to make the trick
import categoryRepository from "./categoryRepository";

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  if (req.query.q != null) {
    const filteredCategories = categoriesFromDB.filter((category) => {
      return category.name.toLowerCase().includes(req.query.q as string);
    });
    res.json(filteredCategories);
  } else {
    res.json(categoriesFromDB);
  }
};

const read: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  const category = categoriesFromDB.find((c) => {
    return (
      c.name.toLowerCase() === req.params.id.toLowerCase() ||
      c.id === Number.parseInt(req.params.id)
    );
  });

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

/* Here you code */

// Export them to import them somewhere else

export default { browse, read };
