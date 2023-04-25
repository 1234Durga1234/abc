import mongoose from "mongoose";
const {Schema}=mongoose;

const questionModel =new Schema({
    questions:{
        type : Array,
        dafault:[]
    },
    answers:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
export default mongoose.model('Question',questionModel );