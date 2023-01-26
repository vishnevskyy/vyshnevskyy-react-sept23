import Joi from "joi";

const UserValidator= Joi.object({
    name:Joi.string().regex(/^[a-zA-z]{1,20}$/).required(),
    username:Joi.string().regex(/^[a-zA-z]{1,20}$/).required(),

})
export {UserValidator}