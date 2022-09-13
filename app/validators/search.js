import Joi from "joi";

const searchQuery = async (req , res , next) => {
    const schema = Joi.object({
        stars : Joi.number(),
        stars_op : Joi.string().valid('lt' , 'lte' , 'eq' , 'gt' , 'gte'),
        created : Joi.string().pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/),
        created_op : Joi.string().valid('lt' , 'lte' , 'eq' , 'gt' , 'gte'),
        language : Joi.string(),
        page: Joi.number(),
        per_page: Joi.number(),
        sort: Joi.string().valid('stars' , 'created'),
        order: Joi.string().valid('asc' , 'desc')
    })
    try{
        await schema.validateAsync(req.query , { abortEarly: false });
        next()
    }
    catch(error){
        return res.status(422).json({
            errors : {
                details : error.details
            }
        })
    }
}

module.exports = {
    searchQuery
}