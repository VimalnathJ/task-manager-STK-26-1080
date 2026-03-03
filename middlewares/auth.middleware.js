console.log("PROTECT MIDDLEWARE RUNNING");
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;

        //token starts with Bearer
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({message : "Invalid token"});
        }

        //removes Bearer to get token
        const token = authHeader.split(" ")[1];

        //verifies token
        const decoded = jwt.verify(token, process.env.JWT_SECRETE);
        req.user = decoded;
        next();
    }

    catch (error) {
        console.log("JWT ERROR:", error);
        res.status(401).json({message : "Invalid token"});
    }
};

module.exports = protect;
