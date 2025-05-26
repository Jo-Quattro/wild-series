import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);
/* ************************************************************************* */
import categoryAction from "./modules/category/categoryAction";
import programAction from "./modules/program/programAction";

router.get("/api/programs", programAction.browse);
router.get("/api/programs/:id", programAction.read);
router.get("/api/categories", categoryAction.browse);
router.get("/api/categories/:id", categoryAction.read);
/* ************************************************************************* */

export default router;
