var app = angular.module('main', ['ui.router']);
//, 'ui.bootstrap

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state({
    name: 'home',
    url: '/',
    templateUrl: 'main.html'
  })
  .state({
    name: 'about',
    url: '/about',
    templateUrl: 'about.html'
  })
  .state({
    name: 'portfolio',
    url: '/portfolio',
    templateUrl: 'portfolio.html'
  })
  .state({
    name: 'contact',
    url: '/contact',
    templateUrl: 'contact.html'
  });

  $urlRouterProvider.otherwise('/');
});
