app.controller("detailsProductCtrl1", function($scope, $http, $routeParams) {
    console.log("In giá trị của $routeParams", $routeParams.id);
    
    $http({
        method: 'GET',
        url:'http://localhost:3000/SanPham/' + $routeParams.id
    }).then(function(response){
        console.log('Lấy thông tin sản phẩm thành công');
        $scope.sp = response.data;
    }, function(error){
        console.log('Lỗi khi lấy thông tin sản phẩm:', error);
    });

    
});

app.controller("XNDHProductCtrl1", function($scope, $http, $routeParams) {

    $scope.prepareOrder = function() {
        $scope.spp.ten = $scope.sp.ten;
        $scope.spp.gia = $scope.sp.gia;
        $scope.spp.soLuong = $scope.sp.soLuong;
        $scope.spp.tongTien = $scope.sp.tongTien;
    };

    $scope.tinhTongTien = function() {
        var gia = parseFloat($scope.sp.gia.replace(/\./g, '').replace(',', '.')) || 0;
        var soLuong = parseInt($scope.sp.soLuong) || 0;
        $scope.sp.tongTien = gia * soLuong;
    };

    $scope.onClickCreate = function() {
        $scope.prepareOrder();

        $http({
            method: 'POST',
            url: 'http://localhost:3000/DonHang',
            data: $scope.spp
        }).then(function() {
            alert('Tạo mới thành công');
        }, function(error) {
            console.log('Lỗi khi tạo đơn hàng:', error);
            $scope.formInValid = true;
            $scope.formInValidMessage = 'Có lỗi xảy ra khi tạo đơn hàng.';
        });
    };
});


    
