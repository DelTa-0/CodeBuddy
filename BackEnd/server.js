import app  from './src/app.js';
import dotenv from 'dotenv';
dotenv.config();

app.listen(3000,()=>{
    console.log("server running on 3000");
})