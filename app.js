var express=require('express');

var app=express();

app.set('view engine','ejs');
app.use(express.static('./public'));

var todoController=require('./controllers/todoController');

todoController(app);

app.listen(3000);