import { addNewBrandGET, addNewBrandPOST, deleteBrandPOST, getAllBrandsGET , getBrandByIdGET } from "../controllers/brandController.js";
import { Router } from "express";
const brandRouter = Router();

brandRouter.get('/', getAllBrandsGET);
brandRouter.get('/brand', getBrandByIdGET);
brandRouter.get('/newBrand', addNewBrandGET);
brandRouter.post('/newBrand', addNewBrandPOST);
brandRouter.post('/deleteBrand', deleteBrandPOST);

export {brandRouter};