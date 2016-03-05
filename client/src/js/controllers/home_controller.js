app.controller('HomeController', [
  '$scope', 'LoginService', 
  function($scope, LoginService){

  $scope.login = {};

  $scope.userlogin = function(){
    console.log('Hello from HomeController');
  }

  console.log(LoginService.test());

}]);
