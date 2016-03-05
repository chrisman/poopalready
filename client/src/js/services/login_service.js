app.service('LoginService', function(){

  var test_string = "Testing log in service";  

  return {
    test: function(){
      return test_string;
    }
  }

});
