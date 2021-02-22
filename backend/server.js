import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import servicesRoutes from './routes/services.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
dotenv.config();
connectDB();

app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/services', servicesRoutes);
app.use('/user', userRoutes);


app.listen(process.env.PORT, () => console.log('Server running'));