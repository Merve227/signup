import {dataFromToken} from '../helpers/Token';
import userController from '../Controller/Authcontroller.js';



export const verifyAuth=(req,res,next)=>{
const token=req.header('x-Auth-token');
if(!token){
   return res.status(404).json({
       status:404,
        message:"no token provided"

    })
}
try{
const user=dataFromToken(token).payload;
const users= userController.users;
console.log("user:",user)
console.log("users",users)
const data = users.find(u=>u.email===user.email);
//we need to fix it on monday
if(data){
    return res.status(404).json({
        messege:"you are not the user"
    
    })
    
   
}
req.body.userId=data.id
    return next();
}
catch(e){
    console.log(e)
    return res.status(404).json({
        message:"invalid token",
        status:400,

    })
}
}