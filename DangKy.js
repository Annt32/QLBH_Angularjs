app.controller('ThemtaiKhoanProductCtrl', function($scope, $http) {
    $scope.product = {
      username: '',
      password: '',
      email: '',
      sdt: 0,
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
  
    $scope.onClickCreate = function() {
      $scope.formInValid = false;
      $scope.formInValidMessage = '';
  
      if ($scope.product.username === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ username';
          return;
      }
      if ($scope.product.password === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ password';
          return;
      }
      if ($scope.product.email === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ email';
          return;
      }
  
      if (!$scope.product.sdt || $scope.product.sdt.length !== 10) {
        $scope.formInValid = true;
        $scope.formInValidMessage = 'Số điện thoại phải là 10 chữ số';
        return;
    }    
  
      $http({
          method: 'POST',
          url: 'http://localhost:3000/taiKhoan',
          data: $scope.product
      }).then(function() {
         alert('Tạo mới thành công')
         window.location.href = '#!DangNhap';
      })
    }

    
  })