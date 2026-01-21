const express = require("express");
// const exe = require("../connection");
const route = express.Router();
const exe = require('../connection');

route.get("/", async function(req,res){
    var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}
    res.render("user/home.ejs",obj)
})


route.get("/politics", async function(req,res){
     var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}

    res.render("user/politics.ejs",obj);
})

route.get("/sport", async function(req,res){
    var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}
    res.render("user/sport.ejs",obj);
})

route.get("/business", async function(req,res){
    var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}
    res.render("user/business.ejs",obj);
})

route.get("/technology", async function(req,res){
    var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}
    res.render("user/technology.ejs",obj);
})

route.get("/about", async function(req,res){
    var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}
    res.render("user/about.ejs",obj);
})

route.get("/contact",async function(req,res){
    var data = await exe (`SELECT * FROM company_details`);
    var obj = {"about_company":data}
    res.render("user/contact.ejs",obj);
})

module.exports = route;

