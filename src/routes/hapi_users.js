const Joi = require('@hapi/joi')

const userSchema = {
    email: Joi.string()
        .trim()
        .email({ minDomainSegments: 2 })
        .required(),
    username: Joi.string()
        .trim()
        .min(4)
        .max(50)
        .required()

}



const userRoutes = [
    {
        method: "GET",
        path: "/user",
        handler: user.getAll
    },

    {
        method: "GET",
        path: "/user",
        handler: user.getSingle
    },

    {
        method: "POST",
        path: "/user",
        handler: user.add,
        options: {
            validate: {
                payload: userSchema

            }
        }
    }
]


export default userRoutes