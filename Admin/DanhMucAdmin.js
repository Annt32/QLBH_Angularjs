app.controller('DanhmucProductCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/DanhMuc',
        data: $scope.product
    }).then(function(response) {
        $scope.dsDanhMuc = response.data
    })

    $scope.onClickDeleteDM = function(idsp) {
        if(window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/DanhMuc/' + idsp
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

