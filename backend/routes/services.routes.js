import express from 'express';
import { getServices, getService, createService } from '../utils/services.utils.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getService);
router.post('/', createService);

export default router;