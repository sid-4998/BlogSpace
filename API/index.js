import express from 'express';
import mongoose from 'mongoose'; 
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
process.loadEnvFile(".env");
mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log("Database is connected!");
})
.catch((error)=> {
    console.log(error);
});
const app = express();
app.listen(3000, ()=> {
    console.log('Server is ready on port 3000!!');
});
app.use(express.json()); 
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
