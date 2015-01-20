angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    //orig data

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope

    //add a check if user logged in-> if yes, go to profile
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
    $window.open("#/app/connection")
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


//starter menu
.controller('TodoCtrl', function($scope,$http) {
  $scope.setMaster = function() {
    $window.open("app.connection");
  };
  $scope.tasks = [
  { title: 'Connections' ,link:"#/app/connections",bg:"normal"},
  { title: 'FAQ' ,link:"#/app/search", bg:"normal"},
  { title: 'Login' ,link:"#/app/login",bg:"normal"},
  { title: 'Registrierung' ,link:"#/app/registry",bg:"normal"},
  { title: 'Mein Amparra' ,link:" ",bg:"test"},
  { title: 'Meine Connections' ,link:"#/app/registry",bg:"normal"},
  { title: 'Meine Nachrichten' ,link:"#/app/registry",bg:"normal"},
  { title: 'Meine Kontakte' ,link:"#/app/registry",bg:"normal"},
  { title: 'Connection' ,link:"#/app/connection",bg:"normal"},
  { title: 'Mein Profil' ,link:"#/app/registry",bg:"normal"}
  ];
  var url1='http://localhost:3000/connection.json';
  $http.get(url1).then(function(resp) {
    $scope.row = resp.data;

  }, function(err) {
    console.info('ERR', err);
// err.status will contain the status code
});



})

.controller("MyCtrl", function($scope, $http){

 var url = window.location.href;
 var query_string = url.split("?");
 var params = query_string[1].split("&");
 var id;        
 var i = 0;
 var param_item = params[i].split("=");
 if (param_item[0] == "myVar1") {
                    // if they match, return the value
                    id= param_item[1];
                  }

                  var url2='http://localhost:3000/connection/'+id+'.json';
                  $http.get(url2).then(function(resp) {
                    $scope.con = resp.data;

                  }, function(err) {
                    console.info('ERR', err);
// err.status will contain the status code
});
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});



