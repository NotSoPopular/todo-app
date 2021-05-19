var data=[{item:'wake up'},{item:'brush'},{item:'eat'}];
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports=function(app){
    
    app.get('/todo',function(req,res)
    {  
        res.render('todo',{todos: data});
    });

    app.post('/todo', urlencodedParser, function (req, res){
        data.push(req.body);
         res.render('todo',{todos:data});
        });

    app.delete('/todo/:item',function(req,res){
        let id=req.params.item;
        for(let i=0;i<data.length;i++)
        {
            if(data[i]['item']==id)
            {
                data.splice(i,1);
                break;
            }
        }
    })
};