const express = require('express');
const app = express();
const user = require('./routes/users');
app.use(user);

<<<<<<< HEAD


app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
});
=======
app.listen(3000, (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("server is running on port 3000");
       }  
});
>>>>>>> 785af64fe458fdc5ab4088554b83f82a500ffc41
