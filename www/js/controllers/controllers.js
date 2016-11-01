angular.module('starter.controllers', [])
.controller('AppCtrl', function ($rootScope, $scope, $ionicModal, $timeout, $http) {
    // Form data for the login modal
	
})

.controller('logout', function ($scope, $http) {

 window.localStorage.clear();
    window.location = "#/login/login";

})
.controller('first', function ($scope, $http) {

$timeout( function(){ window.location = "#/app/home"; }, 3000);
  
})

/** INI
 * esto deberia ir en eservices.js
 *
 */
.factory('SrvCall', function($http, $ionicLoading, $ionicPopup, $rootScope) {
    var srv_response = {
    async: function(urlsrv, method_, params_) {
        
       // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http({
                      method: method_,
                      url: urlsrv,
                      params: params_,
                      headers: {'Accept': 'application/json'}
                    }).success(function(response){
                        //console.log(response.surveys);
                       return response.data;
                    }).error(function(data, status){
                        return status + ': ' + data;
                    });
    // Return the promise to the controller
      return promise;
    }
  };
  return srv_response;
})
/** FIN
 * esto deberia ir en eservices.js
 *
 */

//.controller('Home', function ($rootScope, $scope, $http, $location, SrvCall, $ionicLoading, $ionicPopup) {
.controller('Home', function ($rootScope, $scope, $http, $location, $ionicLoading, $ionicPopup, SrvCall) {

    SrvCall.async('dummy/productos.json', 'GET', '').success(function(resp) {
     //console.log(resp)
     //Apaga el evento cargando
     $ionicLoading.hide();
     $scope.productos = resp.productos;
    }).error(function(resp){
            //Apaga el evento cargando
            $ionicLoading.hide();
                $ionicPopup.alert({
                        title: 'Ups!',
                        template: resp,
                        okText: 'OK!'
                });     
    });
	
})
.controller('orderdetail', function ($scope, $http,$location) {
  	
})

.controller('myorder', function ($scope, $http,$location) {
  	
})
.controller('productlist', function ($scope, $http,$location) {
 
})
.controller('cart', function ($scope, $http,$location) {
 
})
.controller('productdetail', function ($scope, $http,$location) {
 
})
.controller('playlists', function ($scope, $http,$location) {
 
})
.controller('login', function ($scope, $http,$location) {
 
})

.controller('main_page', function ($scope, $http,$location) {
 
})
.controller('register', function ($scope, $http,$location) {
 
})
.controller('shipping', function ($scope, $http,$location) {
 
})










