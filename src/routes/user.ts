
import { Router } from "express";
import { userControllers } from "../controllers/user";
/*import {authToken } from "../libs/authToken";*/


const router = Router();


router.get("/", userControllers.index);
router.get("/profile/:id/:iduser", userControllers.profile);
router.post("/signUp", userControllers.SignUp);
/*router.post("/SignIn", userControllers.SignIn);*/
router.put("/edit/:id", userControllers.Edit);
router.delete("/delete/:id", userControllers.Delete);

export default router;
