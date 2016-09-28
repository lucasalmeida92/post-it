angular.module('PostIt')

.factory('postItService', function ($http, $q) {

	return {
		getAll: function(){
			var deferred = $q.defer();

			$http.get('/api/postits').success(function(data) {
					deferred.resolve(data);
				}).error(function(err){
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

});
