angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider, $locationProvider){
	
	$routeProvider
	.when('/', {
			templateUrl : 'app/views/pages/main.html',
			controller  : 'frontController'
		})
		.when('/home', {
			
			templateUrl : 'app/views/pages/home.html',
			controller  : 'frontController'
		})
		// route for the home page
		.when('/login', {
			
			templateUrl : 'app/views/pages/login.html'
			//controller  : 'mainController'
		})
		// route for the home page
		.when('/signup', {
			
			templateUrl : 'app/views/pages/signUp.html'
			//controller  : 'mainController'
		})
		.when('/main', {
			
			templateUrl : 'app/views/pages/main.html'
			//controller  : 'mainController'
		})
		// route for the about page
		.when('/about/:customerId', {
			templateUrl : 'app/views/pages/about.html',
			controller  : 'aboutController'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'app/views/pages/contact.html',
			controller  : 'contactController'
		})
		// route for the contact page
		.when('/documents', {
			templateUrl : 'app/views/pages/document.html',
		})
		// route for the contact page
		.when('/email', {
			templateUrl : 'app/views/pages/email.html',
		})
		// route for the contact page
		.when('/optimize', {
			templateUrl : 'app/views/pages/optimize.html'
		})
		// route for the contact page
		.when('/gFonts', {
			templateUrl : 'app/views/pages/googleFonts.html'
		})
		// route for the dashboard page
		.when('/dash', {
			templateUrl : 'app/views/pages/dashboard.html'
		})
		// route for the contact page
		.when('/gCharts', {
			templateUrl : 'app/views/pages/googleCharts.html'
		});

		//$locationProvider.html5Mode(true);
});