const jwt = require('jsonwebtoken')

require('dotenv').config()


const checkAuth = async (req, res, next) => {
    
    const authHeader = req.headers["authorization"];

    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.SECRET, (err, decoded) => {

        if (err) return res.sendStatus(403);

        req.user = decoded;

        next()
    })
}

module.exports = checkAuth