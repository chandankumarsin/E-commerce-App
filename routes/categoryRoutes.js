import express from "express";
import {
  isAdmin,
  requireSignIn,
} from "./../config/middleware/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

//routes for Create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//routes for update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Get All category
router.get("/get-category", categoryController);

//Get single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
