import { Router } from "express";
//controllers
import listUsersController from "../controllers/listUsers.controller";
import createUserController from "../controllers/createUser.controller";
import userLoginController from "../controllers/loginUser.controller";
import listUserController from '../controllers/listUser.controller'
import deleteUserController from "../controllers/deleteUserController";
import userUpdateController from "../controllers/updateUser.controller";
//middlewares
import updateUserMiddleware from "../middlewares/updateUser.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyLoginMiddleware from "../middlewares/verifyLoginCredentials.middleware";
import listUsersMiddleware from "../middlewares/listUsers.middleware";
import verifyAdminMiddleware from "../middlewares/verfyAdmin.middlewate";

const router = Router();

router.get("", listUsersMiddleware, verifyAdminMiddleware, listUsersController);
router.get("/profile", listUsersMiddleware, listUserController);

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.post("/login", verifyLoginMiddleware, userLoginController);

router.delete("/:id", deleteUserController)

router.patch("/:id", listUsersMiddleware,userUpdateController)

export default router;
