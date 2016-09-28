angular.module('PostIt')

.factory('postItService', function ($http, $q) {

	return {
		// Get All
		getAll: function(){
			var deferred = $q.defer();

			$http.get('/api/postits').success(function(data) {
					deferred.resolve(data);
				}).error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		},

		// Create
		create: function(content){
			var deferred = $q.defer();

			$http({
				    method: 'POST',
				    url: '/api/postits',
				    data: {content: content},
				    headers: {'Content-Type': 'application/json;charset=utf-8'}
				}).success(function(data) {
					deferred.resolve(data);
				}).error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		},

		// Delete by Id
		delete: function(id){
			var deferred = $q.defer();

			$http({
				    method: 'DELETE',
				    url: '/api/postits',
				    data: {id: id},
				    headers: {'Content-Type': 'application/json;charset=utf-8'}
				}).success(function(data) {
					deferred.resolve(data);
				}).error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

});
