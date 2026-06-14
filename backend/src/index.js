import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import assessmentRoutes from './routes/assessmentRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
dotenv.config();

const app = express();
const allowedOrigins = process.env.FRONTEND_URL
  ? [process.env.FRONTEND_URL]
  : ['http://localhost:5173', 'http://localhost:4173'];

app.use(cors({ origin: (origin, cb) => (!origin || allowedOrigins.includes(origin) ? cb(null, true) : cb(new Error('CORS'))), methods: ['GET','POST','OPTIONS'], allowedHeaders: ['Content-Type'] }));
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'GIMI IPA API v1.0' }));
app.use('/api/assessment', assessmentRoutes);
app.use('/api/payment', paymentRoutes);
app.use(errorHandler);

export default app;
