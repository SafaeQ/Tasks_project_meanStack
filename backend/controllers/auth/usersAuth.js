const Users = require('../../models/users.model')



const signup = async (req, res) =>{
    try {
        const {fullName, email, password} = req.body

        const userExiting = await Users.findOne({ email })

        if( userExiting ) res.status(409).send('🤷‍♂️ user already exiting')

        
    } catch (error) {
        
    }
}