import { Router } from "express";
import { CreateClient } from "../controllers/client/CreateClient";
import CreateOrder from "../controllers/order/CreateOrder";
import CreateProduct from "../controllers/product/CreateProduct";

import multer from 'multer';
import multerConfig from '../config/multer';
import createItemOrder from "../controllers/items_orders/CreateItemOrder";

const router = Router();
const upload = multer(multerConfig.upload('./tmp'));

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.post("/client", CreateClient);
router.post("/order", CreateOrder);
router.post("/product", upload.single('file'), CreateProduct)
router.post("/itens", createItemOrder)


export default router;