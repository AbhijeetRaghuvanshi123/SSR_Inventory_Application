import { getAllItemsGET, getUserItemGET } from "../controllers/itemController.js";
import { Router } from "express";
const itemsRouter = Router();

itemsRouter.get('/', getAllItemsGET);
itemsRouter.get('/user', getUserItemGET);

export {itemsRouter};
