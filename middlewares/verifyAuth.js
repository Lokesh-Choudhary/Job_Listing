const jwt = require('jwtwebtoken');


const verifyAuth =(req,res,next) => {
    try {
        const token = req.headers("Authorization")
        if(!token){
         return res.status(200).json({"Message": "UnAuthorized"})

        
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!decoded){
        next();
        }
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
module.exports = verifyAuth