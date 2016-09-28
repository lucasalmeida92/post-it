angular.module('PostIt')

// App Controller
.controller('appController', function ($scope, $stateParams, postItService) {

	$scope.postItField = {};
	$scope.showPostItForm = false;
	$scope.getAllPostIts = getAllPostIts;
	$scope.savePostIt = savePostIt;
	$scope.openForm = openForm;
	$scope.deletePostIt = deletePostIt;

	init();

	function init() {
		getAllPostIts();
	}

	// ================ Functions

	// ----- Function: GET ALL POST-ITs
	function getAllPostIts() {
		postItService.getAll().then(function(result) {
			$scope.postIts = result;
		}, function (error) {
			alert(error);
		});
	}

	// ----- Function: SAVE POST-IT
	function savePostIt() {
		$scope.showPostItForm = false;
		// Edit
		if($scope.postItField.id) {
			postItService.edit($scope.postItField).then(function(result) {
				getAllPostIts();
				$scope.postItField = {};
			}, function (error) {
				alert(error);
			});
		// Create
		} else {
			postItService.create($scope.postItField.content).then(function(result) {
				getAllPostIts();
				$scope.postItField = {};
			}, function (error) {
				alert(error);
			});
		}
	}

	// ----- Function: OPEN FORM
	function openForm(item) {
		$scope.postItField = item;
		$scope.showPostItForm = true;
	}

	// ----- Function: DELETE POST-IT
	function deletePostIt(item, index) {
		postItService.delete(item.id).then(function(result) {
			getAllPostIts();
		}, function (error) {
			alert(error);
		});
	}

});
