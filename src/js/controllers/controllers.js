(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m, [ns + '.services']);

    app.controller('MainCtrl', ['$scope', function($scope) {
        console.log('main controller');

        function personController($scope) {
            $scope.firstName="John",
            $scope.lastName="Doe"
        }
 
    }]);


})(window,document,window.angular,'myApp','controllers');