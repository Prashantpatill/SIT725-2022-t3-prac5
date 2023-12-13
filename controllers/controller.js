let collection = require('../models/clubs');

const postclub = (req,res) => {
    let clubs = req.body;
    collection.postclub(clubs, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getclubs = (req,res) => {
    collection.getclubs((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}


module.exports = {postclub,getclubs}