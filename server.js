var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Smart Devices for sale</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Laptops</li>"
            +"<li>Mobile Phones</li>"
            +"<li>Hololgraphic Devices</li>"
            +"<li>Samrt Watches</li>"
            +"<li>Gaming Consoles</li>"
            + "</ol>"
    );
});


var server=app.listen(9000);
console.log("Vijay Sales Online shopping running on port 9000");
