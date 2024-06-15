import { Router } from "express";
const router = Router();
import postRouter from "./post.route.js";
import authRouter from "./auth.route.js";
import userRouter from "./user.route.js";


router.use("/api/v1/post", postRouter);
router.use("/api/v1/user/auth", authRouter);
router.use("/api/v1/user", userRouter);

export default router;