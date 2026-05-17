import { moveStockPOST } from "../controllers/stockController.js";
import { Router } from "express";
const stockRouter = Router();

stockRouter.post('/', moveStockPOST);

export {stockRouter};