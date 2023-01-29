const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));


app.get("/bmiCalculator",function(req,res){
res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res){
var weight=parseFloat(req.body.weight);
var height=parseFloat(req.body.height);

var BMI=weight/(height+height);
res.send("Your BMI is "+BMI);

});

app.listen(3000, function(){
    console.log("server is running on port 3000")
});