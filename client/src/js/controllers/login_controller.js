app.controller('LoginController', [
  '$scope', 'LoginService', 
  function($scope, LoginService){

  $scope.login = {};

  $scope.userlogin = function(){
    console.log('Hello from LoginController');
  }

  console.log(LoginService.test());

}]);
