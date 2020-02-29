import {CKContentModel} from "../db/CKContent";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/save', function(req, res, next) {
    // Create an instance of model CKContentModel
    const ckContentModel1 = new CKContentModel({ content: res.body.content });
    // Save the new model instance, passing a callback
    ckContentModel1.save(function (err,saveResult) {
        if (err) {
            res.json({error:err})
        }else{
            res.json({saveResult})
        }
    });
});

module.exports = router;
