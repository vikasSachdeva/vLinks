(function() {
    var countryService = function($http, $q, $rootScope) {
       
        this.getCustomers = function() {
            console.log('inside service GetPost');
          var q = $q.defer();
               $http({
                method:'GET',
                url:'https://restcountries.eu/rest/v2/all',
                dataType:'jsonp'
              })
              .success(function(data){
                q.resolve(data);
                console.log(data);
              })
              .error(function(error){
                q.reject(error);
                console.log(error);
              })
              return q.promise;
        };
        


    };
    countryService.$inject = ['$http', '$q', '$rootScope'];
    angular.module('customersApp').service('countryService', countryService);
                                           
}());



