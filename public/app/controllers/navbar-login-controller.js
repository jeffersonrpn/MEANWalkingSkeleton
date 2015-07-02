angular.module('app')
	.controller('navbarLoginCtrl', function($scope, $http, identity, notifier, auth, $location) {
		$scope.identity = identity;
		$scope.signin = function(username, password) {
			auth.authenticateUser(username, password).then(function(success) {
				if (success) {
					notifier.notify('You have successfully signed in');
				} else {
					notifier.notify('Username and password combination incorrect');
				}
			});
		};

		$scope.signout = function() {
			auth.logoutUser().then(function() {
				$scope.username = "";
				$scope.password = "";
				notifier.notify("You have successifully signed out");
				$location.path('/');
			});
		};
	});