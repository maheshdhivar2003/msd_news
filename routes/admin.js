const express = require("express");
const route = express.Router();
const exe = require('../connection');


route.get("/",function(req,res){
    res.render("admin/login.ejs")
})



route.get("/admin",function(req,res){
    res.render("admin/admin.ejs");
});




route.get("/about_company", async function(req,res){

    var data = await exe(`SELECT * FROM company_details`)
    var obj = {"about_company":data}
    res.render("admin/about_company.ejs",obj);
});

route.post("/about_company",async  function(req,res){

    var d = req.body;

    var sql = `UPDATE company_details SET
    company_name = '${d.company_name}',
    email = '${d.email}',
    company_mobile = '${d.company_mobile}',
    company_address = '${d.company_address}',
    city = '${d.city}',
    facebook = '${d.facebook}',
    twitter = '${d.twitter}',
    linkdin = '${d.linkdin}',
    instagram = '${d.instagram}',
    company_logo = '${d.company_logo}'`

    var data = await exe(sql);

    res.redirect("/admin/about_company");
})








module.exports = route;