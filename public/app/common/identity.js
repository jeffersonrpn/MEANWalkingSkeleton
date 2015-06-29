angular.module('app').factory('identity', function($window, userService) {
	var currentUser;
	if (!!$window.bootstrappedUserObject) {
		currentUser = new userService();
		angular.extend(currentUser, $window.bootstrappedUserObject);
	};
	return {
		currentUser: currentUser,
		isAuthenticated: function() {
			return !!this.currentUser;
		}
	}
});