'use strict';

/**
 * @ngdoc function
 * @name myConnectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myConnectApp
 */
angular.module('myConnectApp')
  .controller('MainCtrl', function ($scope,NgMap) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  });
