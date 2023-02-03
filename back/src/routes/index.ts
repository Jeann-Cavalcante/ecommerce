import { Router } from "express";
import { CreateClient } from "../controllers/client/CreateClient";
import createOrder from "../controllers/order/CreateOrder";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

router.post("/client", CreateClient);
router.post("/order", createOrder);


export default router;