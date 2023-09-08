const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {

    res.render("mainPage", {pageTitle:"בוקר טוב"});

});

router.get("/AddTask",(req, res) => {

    res.render("tasks", {});

});