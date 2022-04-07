import { Router } from "express";
//controllers
import listUserController from "../controllers/listUsers.controller";
import createUserController from "../controllers/createUser.controller";
import userLoginController from "../controllers/loginUser.controller";
//middlewares
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyLoginMiddleware from "../middlewares/verifyLoginCredentials.middleware";
import listUsersMiddleware from "../middlewares/listUsers.middleware";

const router = Router()

router.get("",listUsersMiddleware, listUserController )
router.post("", verifyEmailAvailabilityMiddleware, createUserController)
router.post("/login", verifyLoginMiddleware, userLoginController)


export default router