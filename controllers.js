angular.module('starter.controllers', [])

.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.term = "cellar door"
  $scope.showAlert = function() {
    alert($scope.term);
  }
}])	

.controller("TodoIndexCtrl", ['$scope', function ($scope, $rootScope) {
	$scope.todos = [{title:"Do homework"}]
	$scope.addnew = function() {
	$scope.todos.push({title:$scope.newtodo})
	$scope.newtodo= "";
	}
	$scope.deleteAll = function() {
		$scope.todos = []
	}
	$scope.delete = function(todo){
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index,1);
	}
}])