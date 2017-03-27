(function() {
    
    var countryController = function ($scope, countryService) {
       
        
        function init() {
            //Note: The success() function has been deprecated with Angular 1.5+ and then() is now
            //recommended as shown below.

                 countryService.getCountryList()
                .then(function(data) {
                    $scope.countries = data;
                    console.log($scope.countries);
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
   


              
        }
        
        init();
         $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
       
    };
    

countryController.$inject = ['$scope', 'countryService'];
    angular.module('countryListApp')
      .controller('countryController', countryController);
    
}());