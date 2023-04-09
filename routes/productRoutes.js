import express from "express";
import {
  brainTreeController,
  brainTreePaymentController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/ProductControllers.js";
import Formidable from "express-formidable";
import {
  isAdmin,
  requireSignIn,
} from "./../config/middleware/authMiddleware.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  Formidable(),
  createProductController
);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  Formidable(),
  updateProductController
);

//get product
router.get("/get-product", getProductController);

//Single product
router.get("/get-product/:slug", getSingleProductController);

// photo
router.get("/product-photo/:pid", productPhotoController);

//delete Product
router.delete("/delete-product/:pid", deleteProductController);
// filter Product

router.post("/product-filters", productFiltersController);

//Product Count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//Serch Product
router.get("/search/:keyword", searchProductController);

//similer Product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

// payments routes
//token
router.get("/braintree/token", brainTreeController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
