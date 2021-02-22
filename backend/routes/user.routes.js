import express from 'express';
import { signup, signin } from '../utils/user.utils.js';

const router = express.Router();

router.post ('/signup', signup);
router.post ('/signin', signin);

export default router;