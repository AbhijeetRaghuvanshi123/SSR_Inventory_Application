import { addNewCategoryFormGET, addNewCategoryPOST, deleteCategoryPOST, getAllCategoriesGET, getCategoryGET } from "../controllers/categoryController.js";
import { Router } from "express";
const categoryRouter = Router();

categoryRouter.get('/', getAllCategoriesGET);
categoryRouter.get('/category', getCategoryGET);
categoryRouter.post('/newCategory', addNewCategoryPOST);
categoryRouter.get('/newCategory', addNewCategoryFormGET);
categoryRouter.post('/deleteCategory', deleteCategoryPOST);

export { categoryRouter };