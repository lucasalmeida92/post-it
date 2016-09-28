angular.module('PostIt')

// App Controller
.controller('appController', function ($scope, $stateParams, postItService) {
	postItService.getAll().then(function(result) {
			$scope.postIts = result;
		}, function (error) {
			alert(error);
		});
});
