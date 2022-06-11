const User = require('../../models/users.model')

const getHeshedPassword = require('../../utils/hashedPassword')

const registerValidation = require('../../validation/signup')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

require('dotenv').config();



const signup = async (req, res) =>{
    try {
        const {error } = registerValidation.register(req.body)

        const {fullName, email, password} = req.body

        if (error) { 
            return res.status(400).json({"error": error.message}) }

        const userExiting = await User.findOne({ email })

        if( userExiting ) res.status(409).send('🤷‍♂️ user already exiting')

        const hashedPassword = getHeshedPassword(password)

        const user = await User.create({
            fullName,
            email: email.toLowerCase(),
            password: hashedPassword
        })

        const result = await user.save()

        res.status(200).send(result)

    } catch (error) {

        res.status(404).send(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password} = req.body
        
        const user = await User.findOne({ email })

        if (!user) return res.status(409).send(`🤷‍♂️Email Incorrect / Not Found! Please Register First.`)
        
        const validPassword = bcrypt.compare(password, user.password)

        if (!validPassword) return res.status(409).send(' 🤷‍♂️Password not correct')

        const token = jwt.sign({ _id: user._id}, process.env.SECRET,  {expiresIn: '1h'})

        res.cookie('jwt', token, { httpOnly: true, })

        res.status(200).send({ status: 'success', token })

    } catch (error) {
        res.status(404).send(error)
    }
}


const logout = async (req, res) => {

    const cookie = req.cookies;

    if(!cookie?.jwt) return res.sendStatus(204);

    const refreshToken = cookie.jwt

    const user = await User.findOne({ refreshToken: refreshToken })

    if (!user) {
        res.clearCookie("jwt", { httpOnly: true });

        return res.sendStatus(204);
    }
    user.refreshToken = null;

    await user.save();

    res.clearCookie("jwt", { httpOnly: true });
  
    return res.sendStatus(204);
}

module.exports = { signup, login, logout}