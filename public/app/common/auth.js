angular.module('app').factory('auth', function($http, identity, $q, userService) {
	return {
		authenticateUser: function(username, password) {
			var defer = $q.defer();
			$http.post('/login', { username: username, password: password })
				.then(function(response) {
					if (response.data.success) {
						var user = new userService();
						angular.extend(user, response.data.user);
						identity.currentUser = user;
						defer.resolve(true);
					} else {
						defer.resolve(false);
					}
				});
			return defer.promise;
		},
		logoutUser: function() {
			var defer = $q.defer();
			$http.post('/logout', { logout: true }).then(function() {
				identity.currentUser = undefined;
				defer.resolve();
			});
			return defer.promise;
		}
	};
});