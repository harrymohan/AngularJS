app.controller('ordersController',function($routeParams,customersFactory){

    var customerId = $routeParams.customerId;
	
  
    var vm = this; 
    vm.customer = null;
    
	    function init(){
       // vm.customer = customersFactory.getCustomer(customerId);
           customersFactory.getCustomer(customerId)
            .success(function(customer){
           vm.customer = customer; 
        })
            .error(function(data,status,headers,config){
        }); 
    }
    
  init();
		
});