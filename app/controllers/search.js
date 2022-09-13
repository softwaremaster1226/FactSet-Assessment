import axios from "axios";

const searchGithub = async (req , res) => {
    const q = req.query
    var reqQueryString = ''
    const operators = {
        'gt' : ':>',
        'gte' : ':>=',
        'eq' : ':=',
        'lt' : ':<',
        'lte' : ':<='
    }
    const filterValues = ['stars' , 'created']
    for(const key of filterValues){
        if(q[key]){
            const operator = q[`${key}_op`]
            if(operator) reqQueryString += key + operators[operator] + q[key] + '+'
            else reqQueryString += key + ':>=' + q[key] + '+'
        }
    }
    
    if(q.language) reqQueryString += 'language' + ':' + q.language + '&'
    else if(reqQueryString !== '') reqQueryString += '&'

    const options = ['per_page' , 'page' , 'sort' , 'order']
    for(const option of options){
        if(q[option]) reqQueryString += option + '=' + q[option] + '&'
    }

    try{
        const api_res = await axios.get(
            `https://api.github.com/search/repositories?q=${reqQueryString}`,
            { 
                headers : {
                    'Authorization': "Bearer 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"
                }
            }
        )
        return res.status(200).json(api_res.data)
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong"
        })
    }
}

module.exports = {
    searchGithub
}