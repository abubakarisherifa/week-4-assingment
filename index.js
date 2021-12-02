import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import studentModel from './models/student_schema.js';


dotenv.config();
const app = express();
const port = process.env.port || 7000;
const DB = process.env.DB_URL;
app.use(express.json());

//this is our fist home route
app.get('/student',async(req,res)=>{
const getAllStudent = await studentModel.find({}).limit(3)
if (getAllStudent){
    return res.status(200).json({
        status:true,
        message:'student load successful',
        data: getAllStudent
    })
} else{
    return res.status(404).json({
        status:false,
        message:'Failed to load student',
    })
}
})



//this is our student route
app.post('/student',async(req,res)=>{
    const {fistname,lastname,dateofbirth,school}= req.body
    const addNewStudent = await studentModel.create({
        fistname,
        lastname,
        dateofbirth,
        school
    })
    if(addNewStudent){
        return res.status(200).json({
            status: true,
            message: 'Student add successful',
            data: addNewStudent
        })
    }else{
        return res.status(404).json({
            status: false,
            message: '  Student add failed',
        
    })
    }
 
})


try {
    mongoose.connect(DB)
    
} catch (error) {
    console.log('connection failed')
}
app.listen(port,function(){
    console.log('app is listening to port'+port);
});
