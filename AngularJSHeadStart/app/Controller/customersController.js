app.controller('customersController',function(){
	//alert('customer controller init');
	this.sortBy ='name';
	this.Customers =[{id:1,name:'Jason',age:'35',OrderedPlaced:'12/01/2012',
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
                  }];
	
	
	this.doSort = function(propName){
		//alert(propName);
		this.sortBy = propName;
		this.reverse = !this.reverse;
	}
	this.total = function(total){
		//alert('total'+ 	this.People.length);
		return this.Customers.length;
	}
		
});