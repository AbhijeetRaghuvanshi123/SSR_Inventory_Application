import { addNewCategoryFormGET, addNewCategoryPOST, getAllCategoriesGET, getCategoryGET } from "../controllers/categoryController.js";
import { Router } from "express";
const categoryRouter = Router();

categoryRouter.get('/', getAllCategoriesGET);
categoryRouter.get('/category', getCategoryGET);
categoryRouter.post('/newCategory', addNewCategoryPOST);
categoryRouter.get('/newCategory', addNewCategoryFormGET);

export { categoryRouter };