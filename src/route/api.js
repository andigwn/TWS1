import express from "express";
import userController from "../controller/user_controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import kosController from "../controller/kos_controller.js";
import kamarController from "../controller/kamar_controller.js";
import { upload } from "../middleware/upload_middleware.js";

const userRouter = express.Router();
userRouter.use(authMiddleware)
// User API
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

// Kos API
userRouter.post("/api/kos", upload.array("image", 5), kosController.create);
userRouter.get("/api/kos/:kosId", kosController.get);
userRouter.put("/api/kos/:kosId", upload.array("image", 5), kosController.update);
userRouter.delete("/api/kos/:kosId", kosController.remove);
userRouter.get("/api/kos", kosController.search);

// Kamar API
userRouter.post("/api/kos/:kosId/kamars", upload.array("image", 5), kamarController.create);
userRouter.get("/api/kos/:kosId/kamars/:kamarId", kamarController.get);
userRouter.put("/api/kos/:kosId/kamars/:kamarId", upload.array("image", 5), kamarController.update);
userRouter.delete("/api/kos/:kosId/kamars/:kamarId", kamarController.remove);
userRouter.get("/api/kos/:kosId/kamars", kamarController.list);

export { userRouter }