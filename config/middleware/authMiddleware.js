import  jwt  from "jsonwebtoken";
import userModel from "../../models/userModel.js";

//Protected Route Token
export const requireSignIn = async (req, res, next)=>{
    try{
        const decode  = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
     next();
    }catch (error) {
console.log(error)
    }   
};

//Admin access
export const isAdmin = async (req,res,next) =>{

    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                 message:'unAuthorized Access'

            })
        }else{ 
            next(); 
        }
    }catch(error) {
console.log(error);
res.status(401).send({
    success:false,
    message:"Error in Admin Middleware"
})
    }

}