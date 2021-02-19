import express from 'express';
import { getServices, getService } from '../utils/services.utils.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getService);

export default router;