const jwt = require('jsonwebtoken')

const checkAuth = async (req, res, next) => {
    
    const authHeader = req.headers["authorization"];

    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401)

    
}