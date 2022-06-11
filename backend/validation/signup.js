const Joi = require('joi')


const register = (data) => {
    const schema = Joi.object({

        fullName: Joi.string().min(5).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
        
    })
    return schema.validate(data);
}