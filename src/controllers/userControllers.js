
const userModel = require('../models/UserModel')



module.exports.HomePageController = (req,res)=> {

   userModel.findOne({username:req.body.username})
    .then(userFind=>{
        res.json({message:'users',users:userFind})
    })
    .catch(err=>res.json({message:'something went wrong'}))

}

module.exports.CreateUserController = (req,res)=> {

    const {name,username,email,password} = req.body

    const user = new userModel({
        name:name,
        username:username,
        email:email,
        password:password
    })
    user.save()
    .then(userCreated=>{
        res.json({message:'user Created',users:userCreated})
    })
    .catch(err=>res.json({message:'something went wrong'}))
}
module.exports.DeleteUserController = (req,res)=> {
    userModel.findOneAndDelete({_id:req.params.id})
    .then(user=>{
        res.json({message:'user deleted',users:user})
    })
    .catch(err=>res.json({message:'something went wrong'}))
}
// module.exports.UpdateUserController = (req,res)=> {
    
//     const {name,username,email,password} = req.body

//     userModel.findByIdAndUpdate({_id:req.params.id,{}})
//     .then(userCreated=>{
//         res.json({message:'user Created',users:userCreated})
//     })
//     .catch(err=>res.json({message:'something went wrong'}))
// }
