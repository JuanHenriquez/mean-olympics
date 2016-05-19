import angular from 'angular'

// Create the main module.
angular.module('olympics', [])
.controller('sportsController', function($http) {

    this.response = [];

    $http.get('/sports').then( (response ) => {
        this.sports = response.data;
    } );
});
