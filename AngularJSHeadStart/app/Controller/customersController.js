app.controller('customersController',function(customersFactory){
	
	this.sortBy ='name';
	
    var vmc = this;
    
    vmc.customers = [];
    
    function init(){
        customersFactory.getCustomers()
            .success(function(customers){
            alert(customers.length);
            vmc.customers = customers;
            
        })
            .error(function(data,status,headers,config){
            //handle error
            alert('error');
        });
    }
	
	init();
	this.doSort = function(propName){
	
		this.sortBy = propName;
		this.reverse = !this.reverse;
	}
	this.total = function(){
	
		return vmc.customers.length;
	}
		
});