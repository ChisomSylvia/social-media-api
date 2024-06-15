import Router from 'express';
const router = Router();
import PostController from '../controllers/post.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { createPostSchema, updatePostSchema } from '../schema/post.schema.js';


router.post('/', validate(createPostSchema), PostController.createPost);
router.get('/', PostController.getPosts);
router.get('/query', PostController.getPost);
router.patch('/:id', validate(updatePostSchema), PostController.updatePostById);
router.delete('/:id', PostController.deletePostById);

export default router;