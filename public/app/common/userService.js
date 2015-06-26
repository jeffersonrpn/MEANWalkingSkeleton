angular.module('app').factory('userService', function($resource) {
	var UserResource = $resource('/api/users/:id', { _id: "@id" });

	UserResource.prototype.isAdmin = function() {
		return this.role && this.role.indexOf('admin') > -1;
	}

	return UserResource;
});