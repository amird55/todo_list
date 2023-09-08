const express = require('express');
const router = express.Router()
module.exports = router;

router.post("/Add", function(req,res){
    //קליטת הנתונים
    let {name,due_date,done_date,category_id,owner_id,creator_id}=req.body;
    // let name        =req.body.name;
    // let due_date    =req.body.due_date;
    // let done_date   =req.body.done_date;
    // let category_id =req.body.category_id;
    // let owner_id    =req.body.owner_id;
    // let creator_id  =req.body.creator_id;

    // יצירת שאילתה לשמירת שורה
    let Query="INSERT INTO tasks ";
    Query += "(name,due_date,done_date,category_id,owner_id,creator_id) ";
    Query += " VALUES ";
    Query += `('${name}','${due_date}','${done_date}','${category_id}','${owner_id}','${creator_id}') `;
    console.log("Adding task",Query);

    db_pool.query(Query, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK",lastId:rows.insertId});
        }

    });

    //החזרת תשובה לצד קדמי

})