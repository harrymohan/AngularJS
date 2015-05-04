app.controller('ordersController',function($routeParams,customersFactory){

    var customerId = $routeParams.customerId;
	
  
    var vm = this; 
    vm.customer = [];
    
	    function init(){
       customersFactory.getCustomer(customerId)
            .success(function(customer){
            vm.customer = customer;
        })
            .error(function(data,status,headers,config){
            //handle error
        });
          
    }
    
  init();
		
});