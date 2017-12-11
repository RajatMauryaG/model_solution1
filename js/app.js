(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.listlunches = "";
  $scope.msg = "";

  $scope.LunchesCount = function () {
	if($scope.listlunches == ""){
		$scope.msg = "Please enter data first";
	}
    else if(More($scope.listlunches)){
		$scope.msg = "Too much!";
	}else{
		$scope.msg="Enjoy!";
	}
  };
function More(listlunch) {
	var lunches = listlunch.split(',');
	if(lunches.length > 3){
		return true;
	}else{
		return false;
	}
  }

};


})();
