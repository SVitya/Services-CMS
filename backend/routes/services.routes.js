import express from 'express';
import { getServices } from '../utils/services.utils.js';

const router = express.Router();

router.get('/', getServices);

export default router;