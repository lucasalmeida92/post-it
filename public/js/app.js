angular.module('PostIt', [
		'ui.router'
	])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'appController'
		});

	$urlRouterProvider.otherwise('/');

});
