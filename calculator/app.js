var app = angular.module('plunker', ['ngMaterial']);

app.controller('CalcControl', function($scope) {
  $scope.name = 'CalC';
  $scope.result = "";
  
  $scope.addVal = function(val) {
    $scope.result =  $scope.result.toString()+val;
  };
  $scope.clear = function() {
    $scope.result = '';
  };
  $scope.evaluate = function() {
    var res = '';
    try {
      res = eval($scope.result);
    } catch (e) {
      res = 'Error'
    }
    $scope.result = res;
  };
  $scope.checkEnter=function(evt)
  {
    if(evt.keyCode==13){
      $scope.evaluate();
    }
   
  }
});

app.directive("regExpRequire", function() {

  var regexp;
  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      regexp = eval(attrs.regExpRequire);
//regexp="/^[0-9]/";
      var char;
      elem.on("keypress", function(event) {
        char = String.fromCharCode(event.which)
        if (!regexp.test(elem.val() + char))
          event.preventDefault();
      })
    }
  }

})