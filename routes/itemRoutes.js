import { addNewItemGET, addNewItemPOST, deleteItemPOST, getAllItemsGET, getUserItemsGET, getItemGET } from "../controllers/itemController.js";
import { Router } from "express";
const itemsRouter = Router();

itemsRouter.get('/', getAllItemsGET);
itemsRouter.get('/user', getUserItemsGET);
itemsRouter.get('/newItem', addNewItemGET);
itemsRouter.post('/newItem', addNewItemPOST);
itemsRouter.post('/deleteItem', deleteItemPOST);
itemsRouter.get('/viewItem', getItemGET);

export {itemsRouter};
