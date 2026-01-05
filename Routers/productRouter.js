import express from "express";
import { createProduct, getProducts, deletProduct, updateProduct, getProductID } from '../controller/productController.js '; 

const productRouter = express.Router();

productRouter.get("/",getProducts)
productRouter.post("/", createProduct)
productRouter.delete("/:productID", deletProduct)
productRouter.put("/:productID", updateProduct)
productRouter.get("/:productID", getProductID)


export default productRouter;