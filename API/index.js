import express from 'express';
import mongoose from 'mongoose'; 
import userRoutes from './routes/user.route.js'
process.loadEnvFile(".env");
mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log("Database is connected!");
})
.catch((err)=> {
    console.log(err);
})
const app = express();

app.use('/api/user', userRoutes);


app.listen(3000, ()=> {
    console.log('Server is ready on port 3000!!');
})