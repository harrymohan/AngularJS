app.controller('ordersController',function($routeParams){
	//alert('orders controller init');
    var customerId = $routeParams.customerId;
	
   // alert('customerID'+customerId);
    var vm = this; 
   vm.orders = null;
	vm.Customers =[{id:1,name:'Jason',age:'35',OrderedPlaced:'12/01/2012',
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
	    function init(){
        //alert('init fn: '+vm.Customers.length);
        var len = vm.Customers.length;
        //alert(vm.Customers[0].id);
        for(var i=0;i<len;i++)
        {
            if(vm.Customers[i].id === parseInt(customerId))
            {
                vm.orders = vm.Customers[i].orders;
                //alert('inside eq');
                break;
            }
        }
      
    }
    
  init();
		
});