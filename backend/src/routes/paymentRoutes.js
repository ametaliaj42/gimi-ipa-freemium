import { Router } from 'express';
import { createIntent, mockConfirm } from '../controllers/paymentController.js';
const router = Router();
router.post('/create-intent', createIntent);
router.post('/mock-confirm', mockConfirm); // Remove when using real Stripe
export default router;
