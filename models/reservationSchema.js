import mongoose from "mongoose";
import validator from "validator";


const reservationSchema= new mongoose.Schema({
    firstName:{
        type:String,
        minlength:[3,"must contain atleasst 3 letters"],
        maxlength:[30,"should not exceed more than 30 letters"],
        required:true,
    },
    lastName:{
        type:String,
        minlength:[3,"must contain atleasst 3 letters"],
        maxlength:[30,"should not exceed more than 30 letters"],
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"provide a valid email"],
    },
    phoneNo:{
        type:String,
        required:true,
        minlength:[11,"must be 11"],
        maxlength:[11,"must be 11"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

export const Reservation= mongoose.model("Reservation",reservationSchema)