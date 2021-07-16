const express=require('express')
const User=require('../model/user')

const router=new express.Router()

router.post('/users',async (req,res)=>{
    
    const user=new User(req.body)
    
    try{
         await user.save()
        res.status(201).send({user})
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/users/all',async (req,res)=>{
    const user=await User.find({})
    res.status(200).send(user)
})


module.exports=router