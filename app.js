var express = require("express");
var path = require("path");
//var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var routes = require("./routes");
var app = express();

//const url = 'mongodb://localhost:27017/clinicalTrialsTwo'
//mongoose.connect(url, {useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true});

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret:"doemlfgddfsoi!gjdsf5684561dsf",
    resave:false,
    saveUninitialized:false
}));

app.use(routes);

app.listen(app.get("port"),function(){
	console.log("Server started on port " + app.get("port"));
});

