const mongoose = require("mongoose");

const company_model = mongoose.model("about_company",{
    "company_name":String,
    "email":String,
    "company_mobile":Number,
    "company_adress":String,
    "city":String,
    "facebook":String,
    "twitter":String,
    "linkdin":String,
    "instagram":String

});

module.exports= company_model;