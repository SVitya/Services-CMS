import express from 'express';
import { getServices, getService, createService } from '../utils/services.utils.js';
import auth from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getService);
router.post('/', auth, createService);

export default router;