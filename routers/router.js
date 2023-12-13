let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/',function(req,res)
{
    controller.postclub(req,res);
}
);

router.get('/',function(res,req)
{
    controller.getclubs(res,req);
}
); 


module.exports = router;