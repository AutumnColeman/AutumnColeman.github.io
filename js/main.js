var app = angular.module('main', ['ui.router', 'ui.bootstrap']);
//, 'ui.bootstrap
// var ModalDemoCtrl = function ($scope, $modal) {
//
//   $scope.open = function () {
//
//     var modalInstance = $modal.open({
//       templateUrl: 'myModalContent.html',
//       controller: ModalInstanceCtrl
//     });
//
//   };
// };
//
//
// var ModalInstanceCtrl = function ($scope, $modalInstance) {
//
//   $scope.ok = function () {
//     $modalInstance.close("ok");
//   };
//
//   $scope.cancel = function () {
//     $modalInstance.dismiss("cancel");
//   };
// };

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
    name: 'skills',
    url: '/skills',
    templateUrl: 'skills.html'
  })
  .state({
    name: 'contact',
    url: '/contact',
    templateUrl: 'contact.html'
  });

  $urlRouterProvider.otherwise('/');
});
