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
		},
		isAuthorized: function(role) {
			return !!this.currentUser && this.currentUser.roles.indexOf('admin') > -1;
		}
	}
});