app.controller("detailsProductCtrl3", function($scope, $http, $routeParams) {
    console.log("In giá trị của $routeParams", $routeParams.id);
    
    // Call api lấy thông tin chi tiết sản phẩm dựa vào id
    $http({
        method: 'GET',
        url:'http://localhost:3000/Smartwatch/' + $routeParams.id
    }).then(function(response){
        console.log('Lấy thông tin sản phẩm thành công');
        // Gán data vào biến sp để sử dụng trong view
        $scope.sp = response.data;
    }, function(error){
        console.log('Lỗi khi lấy thông tin sản phẩm:', error);
    });
});