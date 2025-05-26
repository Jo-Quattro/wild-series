// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
  {
    id: 3,
    name: "Drame",
  },
  {
    id: 4,
    name: "Action",
  },
  {
    id: 5,
    name: "Aventure",
  },
  {
    id: 6,
    name: "Animation",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(req.query.q as string),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const category = categories.find(
    (c) =>
      c.name.toLowerCase() === req.params.id.toLowerCase() ||
      c.id === Number.parseInt(req.params.id),
  );

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

/* Here you code */

// Export them to import them somewhere else

export default {
  read,
  browse,
};
