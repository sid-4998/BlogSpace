import express from 'express';
import mongoose from 'mongoose'; 
process.loadEnvFile(".env");
mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log("Database is connected!");
})
.catch((err)=> {
    console.log(err);
})
const app = express();




app.listen(3000, ()=> {
    console.log('Server is ready on port 3000!!');
})