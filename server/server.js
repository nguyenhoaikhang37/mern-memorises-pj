import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));

// Routes
app.get('/', (req, res) => {
    res.json({message: 'Memories API is running'});
});
app.use('/api/v1/posts', postRoutes);

mongoose.connect('mongodb+srv://khangnguyennhkdev:khangnguyennhkdev123@cluster0.28zhlpb.mongodb.net/memories-pj?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(process.env.PORT || 8080, () => console.log(`Server is running on port ${process.env.PORT || 8080}`)))
    .catch((err) => console.log(err.message));
