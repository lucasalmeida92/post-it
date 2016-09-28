angular.module('PostIt')

// App Controller
.controller('appController', function ($scope, $stateParams, postItService) {

	$scope.postItContent = '';

	postItService.getAll().then(function(result) {
			$scope.postIts = result;
		}, function (error) {
			alert(error);
		});

	$scope.savePostIt = function() {
		postItService.create($scope.postItContent).then(function(result) {
			console.log(result);
			$scope.postItContent = '';
		}, function (error) {
			alert(error);
		});
	};

	$scope.editPostIt = function(item) {
		postItService.edit(item.id).then(function(result) {
			alert('Post-it updated!');
		}, function (error) {
			alert(error);
		});
	};

	$scope.deletePostIt = function(item, index) {
		console.log('item index: ', index);
		console.log('item id: ', item.id);
		postItService.delete(item.id).then(function(result) {
			$scope.postIts = $scope.postIts.splice(index,1);
			alert('Post-it deleted!');
		}, function (error) {
			alert(error);
		});
	};

});
