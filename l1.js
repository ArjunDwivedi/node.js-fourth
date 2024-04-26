const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const adminroutes = require('./routes/admin'); 
const shoproutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));

app.use(adminroutes);
app.use(shoproutes);


(async()=>{
    console.log("port pending");
  app.listen(3000); 
  console.log("port sucssefull");
})();
