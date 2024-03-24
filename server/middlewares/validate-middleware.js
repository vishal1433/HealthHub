//schema.parseAsync(req.body) chaiye jo user ne jo v data fill ki
//  hai or jo v schema 
// define kiya hai kya wo match kar rha h ki nahi
//jo signup schema h wo wala schema yaha dalenge
const validate =(schema)=>async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body= parseBody;
        next();
    } catch (error) {
        const message= error.errors[0].message;
        console.log(message);
       res.status(400).json({msg:message});
    }

};
module.exports = validate;

//ye export kar lene ke bd  auth router me jaynge or waha register me logic likhnge