import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const todoSchema =Schema({
    title: String,
    description: String,
    dataTime: String,
    completed: Boolean,
});


const myTodoModel = model('todo',todoSchema)
export default myTodoModel;
