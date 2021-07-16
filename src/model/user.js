const mongoose=require('mongoose')
const validator=require('validator')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    
    },
    phn:{
        type:Number,
        required:true,
        validate(value){
            if(value<10||value>13){
                throw new Error('Invalid phone number')
            }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    hobbies:{
        type:String,
        required:true
    }
})

const User=mongoose.model('User', userSchema)

module.exports=User