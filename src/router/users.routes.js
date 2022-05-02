import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/loginUser.controller";
import showUserController from "../controllers/showUser.controller";
import updateUserController from "../controllers/updateUser.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyIfIsAdmMiddleware from "../middlewares/verifyIfIsAdm.middleware";
import verifyIfUserExistsMiddleware from "../middlewares/verifyIfUserExists.middleware";
import verifyLoginCredentialsMiddleware from "../middlewares/verifyLoginCredentials.middleware";

const router = Router();

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.post(
  "/users/login",
  verifyLoginCredentialsMiddleware,
  userLoginController
);
router.get(
  "/users",
  verifyAuthTokenMiddleware,
  verifyIfIsAdmMiddleware,
  listUsersController
);
router.get("/users/profile", verifyAuthTokenMiddleware, showUserController);
router.patch(
  "/users/:id",
  verifyIfUserExistsMiddleware,
  verifyAuthTokenMiddleware,
  verifyIfIsAdmMiddleware,
  updateUserController
);
router.delete(
  "/users/:id",
  verifyIfUserExistsMiddleware,
  verifyAuthTokenMiddleware,
  verifyIfIsAdmMiddleware,
  deleteUserController
);

export default router;
