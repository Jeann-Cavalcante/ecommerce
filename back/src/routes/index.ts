import { Router } from "express";
import { CreateClient } from "../controllers/client/CreateClient";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

routes.post("/client", CreateClient);

export default routes;