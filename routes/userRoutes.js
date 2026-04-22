import { Router } from "express";
import { homeGET, newUserFormGET, addNewUserPOST, viewUserGET } from "../controllers/userController.js";
const indexRouter = Router();

indexRouter.get('/', homeGET);
indexRouter.get('/new', newUserFormGET);
indexRouter.post('/new', addNewUserPOST);
indexRouter.get('/profile', viewUserGET);

export { indexRouter };