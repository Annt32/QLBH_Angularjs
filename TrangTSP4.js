app.controller('chuotProductCtrl', function($scope, $http){
    $scope.dsSanPham = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/Chuot',
        data: $scope.product
    }).then(function(response) {
        $scope.dsSanPham = response.data
    })

    console.log("Bắt đầu gọi file detail.js");
});