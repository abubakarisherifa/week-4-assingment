import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const studentSchema =Schema({
    firstname: String,
    lastname: String,
    dataofbirt: String,
    school: String,
});


const myStudentModel = model('student',studentSchema)
export default myStudentModel;
