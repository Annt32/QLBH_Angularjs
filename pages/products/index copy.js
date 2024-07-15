app.controller('listProductCtrl', function($scope, $http){
    $scope.dsSanPham = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/SanPham',
        data: $scope.product
    }).then(function(response) {
        $scope.dsSanPham = response.data
    })

    $http({
        method: 'GET',
        url: 'http://localhost:3000/LapTop',
        data: $scope.product
    }).then(function(response) {
        $scope.dsLapTop = response.data
    })

    $http({
        method: 'GET',
        url: 'http://localhost:3000/Smartwatch',
        data: $scope.product
    }).then(function(response) {
        $scope.dsSmartwatch = response.data
    })


    $http({
        method: 'GET',
        url: 'http://localhost:3000/Chuot',
        data: $scope.product
    }).then(function(response) {
        $scope.dsChuot = response.data
    })


    
});


