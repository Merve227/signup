import express from 'express';
import UserController from '../Controller/AuthController';
import validator from '../middleware/validator';

const router = express.Router();
router.post('/auth/signup',validator.newAccountRules(),validator.validatorInput,UserController.UserController.signup);
router.post('/auth/signin',UserController.UserController.signin);
export default router;