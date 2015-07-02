angular.module('app')
	.controller('userListCtrl', function($scope, userService) {
		$scope.users = userService.query();
	});