import { getAllBrandsGET , getBrandByIdGET } from "../controllers/brandController.js";
import { Router } from "express";
const brandRouter = Router();

brandRouter.get('/', getAllBrandsGET);
brandRouter.get('/brand', getBrandByIdGET);

export {brandRouter};