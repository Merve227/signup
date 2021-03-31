import{check, validationResult} from 'express-validator'
class validator{
    static newAccountRules(){
        return[check("email", "invalid email").isEmail(),
    check("firstname","first name must be valid").isAlpha(),
    check("password","password must be strong").isStrongPassword(),
    check("gender", "gender mus be female or male").isIn(["male","female"])
    ];
    }
    static validatorInput=(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
        const errormessage=errors.errors.map(e=>e.msg);
        return res.status(400).json({
            error:errormessage,
            status:400,
        })
        }
        return next();
    }
}
export default validator;