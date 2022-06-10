const User = require('../../models/users.model')

const getHeshedPassword = require('../../utils/hashedPassword')



const signup = async (req, res) =>{
    try {
        const {fullName, email, password} = req.body

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

module.exports = { signup, }