import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();

// Middleware
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors())
// Routes
app.use('/api/v1/posts', postRoutes);

const MONGODB_URL = 'mongodb+srv://khangnguyennhkdev:khangnguyennhkdev123@cluster0.28zhlpb.mongodb.net/memories-pj?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4000;

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((err) => console.log(err.message));
