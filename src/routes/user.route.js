import Router from 'express';
const router = Router();
import UserController from '../controllers/user.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { createUserSchema, updateUserSchema } from '../schema/user.schema.js';


// router.post('/', validate(createUserSchema), UserController.createUser);
router.get('/', UserController.findUsers);
router.get('/query', UserController.findUser);
router.patch('/:id', validate(updateUserSchema), UserController.updateUser);
router.delete('/:id', UserController.delUser);


export default router;