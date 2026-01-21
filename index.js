const express = require("express");
const bodyparser = require("body-parser");
const user_route = require("./routes/user");
const admin_route = require("./routes/admin");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());

app.use(express.static("public/"));
app.use(bodyparser.urlencoded({extended:true}));

app.use("/",user_route);
app.use("/admin",admin_route);

app.listen(1000);