(function() {
    
    var app = angular.module('countryListApp', ['ngRoute','angularUtils.directives.dirPagination']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'countryController',
                templateUrl: 'app/views/countryList.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());