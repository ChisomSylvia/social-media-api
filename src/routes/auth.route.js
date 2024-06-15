import AuthController from '../controllers/auth.controller.js';
import Router from 'express';
const router = Router();
import validate from '../middlewares/validate.middleware.js';
import { createUserSchema, loginSchema } from '../schema/user.schema.js';

router.post('/', validate(createUserSchema), AuthController.signUp);
router.post('/login', validate(loginSchema), AuthController.login);
router.post('/logout', AuthController.logout);

export default router;