const express = require('express');
const router = express.Router()
module.exports = router;

router.post("/Add",function(req,res){
    let name        =req.body.name;
    let bg_color    =req.body.bg_color;
    let text_color  =req.body.text_color;

    let q='INSERT INTO `thems_tbl` ( `name`, `bg_color`, `text_color`) ';
    q += `VALUES ( '${name}', '${bg_color}', '${text_color}')`;

    db_pool.query(q, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK",lastId:rows.insertId});
        }

    });


});