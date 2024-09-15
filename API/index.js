import express from 'express';
import mongoose from 'mongoose'; 
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
process.loadEnvFile('.env');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
app.listen(3000, ()=> {
    console.log('Server is ready on port 3000!!');
});