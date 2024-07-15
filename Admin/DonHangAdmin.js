app.controller('DonHangProductCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/DonHang',
        data: $scope.product
    }).then(function(response) {
        $scope.dsDonHang = response.data
    })
})