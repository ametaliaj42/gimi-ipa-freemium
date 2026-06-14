import { Router } from 'express';
import { submitAssessment, getAssessment } from '../controllers/assessmentController.js';
const router = Router();
router.post('/', submitAssessment);
router.get('/:id', getAssessment);
export default router;
