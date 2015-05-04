


var customerFactory = function($http){
    
    var factory ={};
    //this shall be asynchronous call
    factory.getCustomers = function(){
        
        return $http.get('/customers');
    }
    var orders = {};
    
    
    factory.getCustomer = function(customerId){
        return $http.get('/customers/'+customerId);
      
    }
    
    return factory;
}
angular.module('customer').factory('customersFactory',customerFactory);