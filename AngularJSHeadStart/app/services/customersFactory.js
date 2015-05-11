


var customersFactory = function($http){
    
    var factory ={};
    
    factory.getCustomers = function(){
       return $http.get('/customers');
    }
    
    factory.getCustomer = function(customerID)
    {
        return $http.get('/customers/'+customerID);
    }
    return factory;
}
app.factory('customersFactory',customersFactory);