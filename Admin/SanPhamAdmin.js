app.controller('SanPhamProductCtrl', function($scope, $http) {
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

    $scope.onClickDeleteSP = function(idsp) {
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/SanPham/' + idsp
            }).then(function() {
                alert('Xóa sản phẩm thành công');
            });
        } else {
            alert('Hành động xóa đã bị hủy');
        }
    }

    $scope.onClickDeleteLT = function(idsp) {
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/LapTop/' + idsp
            }).then(function() {
                alert('Xóa sản phẩm thành công');
            }, function(error) {
                alert('Xóa sản phẩm thất bại: ' + error.message);
            });
        } else {
            alert('Hành động xóa đã bị hủy');
        }
    }

    $scope.onClickDeleteSW = function(idsp) {
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/Smartwatch/' + idsp
            }).then(function() {
                alert('Xóa sản phẩm thành công');
            }, function(error) {
                alert('Xóa sản phẩm thất bại: ' + error.message);
            });
        } else {
            alert('Hành động xóa đã bị hủy');
        }
    }

    $scope.onClickDeleteC = function(idsp) {
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/Chuot/' + idsp
            }).then(function() {
                alert('Xóa sản phẩm thành công');
            }, function(error) {
                alert('Xóa sản phẩm thất bại: ' + error.message);
            });
        } else {
            alert('Hành động xóa đã bị hủy');
        }
    }
    

})