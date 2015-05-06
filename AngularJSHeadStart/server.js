var express = require('express');
var app = express();
//var bodyparser = require('body-parser');
/*
app.configure(function(){
    app.use(express.static(__dirname,'/'));
});
*/

//configure body parser to user bodyparser()
//this will let us 
///app.use(bodyparser.urlencoded({extended:true}));
//app.use(bodyparser.json());

var port = process.env.PORT || 8080;


//on routes that end in /bears


	//get all the bears
	app.get('/customers',function(req,res){
		  res.json(customers);
		});
	

	// get the beSSSar with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    app.get('/customers/:id',function(req, res) {
        var customerId = parseInt(req.params.id);
        var len = customers.length;
        var data ={};
        for(var i=0;i<len;i++)
        {
            if(customers[i].id === parseInt(customerId))
            {
                data = customers[i];
                break;
            }    
        }
        res.json(data);
    });

 var customers = [{id:1,name:'Jason',age:'35',OrderedPlaced:'12/01/2012',
                   orders:[
                       {
                           id:1,
                           product:'shoes',
                           total:9.94
                       }
                           
                   ]
                  },
                  {id:2,name:'Sally',age:'32',OrderedPlaced:'06/21/2010',
                  orders:[
                       {
                           id:2,
                           product:'baseball',
                           total:19.94
                       }
                           
                   ]
                  },
                  {id:3,name:'Harry',age:'29',OrderedPlaced:'01/04/2007',
                  orders:[
                       {
                           id:3,
                           product:'Perfume',
                           total:123.21
                       }
                           
                   ]
                  }
            ];
//Register our routes
//all of our routes will be prefixed with /api
//app.use('/api',router);

//start the server
app.listen(port);
console.log('Magic happens at port '+port);