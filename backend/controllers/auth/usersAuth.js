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

const login = async (req, res) => {
    try {
        const { email, password} = req.body

        const user = await User.findOne({ email })

        if (!user) return res.status(409).send(`🤷‍♂️Email Incorrect / Not Found! Please Register First.`)

        const validPassword = bcrypt.compare(password, user.password)

        if (!validPassword) return res.status(409).send(' 🤷‍♂️Password not correct')

        
    } catch (error) {
        
    }
}

module.exports = { signup, }