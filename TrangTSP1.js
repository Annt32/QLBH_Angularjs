app.controller('SanPhamProductCtrl', function($scope, $http){
    $scope.dsSanPham = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/SanPham',
        data: $scope.product
    }).then(function(response) {
        $scope.dsSanPham = response.data
    })

    console.log("Bắt đầu gọi file detail.js");
    
});

app.controller('SanPhamGHProductCtrl', function($scope, $http){
    $scope.dsSanPhamGH = [];
    $http({
        method: 'GET',
        url: 'http://localhost:3000/GioHang',
        data: $scope.product
    }).then(function(response) {
        $scope.dsSanPhamGH = response.data
    })

    console.log("Bắt đầu gọi file detail.js");
    
});
