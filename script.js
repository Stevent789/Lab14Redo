var app = angular.module("myMod", ["ngRoute"])

app.controller("routingController", function() {

})

app.config(function($routeProvider) {
  $routeProvider
  .when("/cat", {
    controller: "routingController",
    templateUrl: "cat.html"
  })
  .when("/dog", {
    controller: "routingController",
    templateUrl:"dog.html"
  })
  .otherwise({redirectTo:"/"});
});
