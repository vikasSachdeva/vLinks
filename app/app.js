(function() {
    
    var app = angular.module('customersApp', ['ngRoute','angularUtils.directives.dirPagination']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'countryController',
                templateUrl: 'app/views/countryList.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());