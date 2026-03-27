const jwt = require("jsonwebtoken");
require ('dotenv').config();

module.exports.createJwtToken =(id)=>{
    return jwt.sign(
        {id},
        process.env.TOKEN_KEY,
        {expiresIn: 3 * 24 * 60 * 60,}
    )
}