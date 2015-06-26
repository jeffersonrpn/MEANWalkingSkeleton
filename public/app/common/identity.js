angular.module('app').factory('identity', function($window, userService) {
	var currentUser;
	if (!!$window.bootstrappedUserObject) {
		currenUser = new userService();
		angular.extend(currenUser, $window.bootstrappedUserObject);
		return {
			currentUser: currentUser,
			isAuthenticated: function() {
				return !!this.currentUser;
			}
		}
	};
});