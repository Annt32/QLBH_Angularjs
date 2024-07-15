app.controller('SuaSanPhamProductCtrl', function($scope, $http, $routeParams) {
  $scope.product = {
    id: '',
    ten: '',
    mota: '',
    gia: 0,
    trangThai: ''
  }
  $scope.formInValid = false;
  $scope.formInValidMessage = '';

  $http({
      method: 'GET',
      url: 'http://localhost:3000/SanPham/' + $routeParams.id
  }).then(function(response) {
      $scope.product = response.data
  })

  $scope.onClickUpdate = function() {
    $scope.formInValid = false;
    $scope.formInValidMessage = '';

    if ($scope.product.id === '') {
        $scope.formInValid = true;
        $scope.formInValidMessage = 'Nhập đầy đủ ID';
        return;
    }
    if ($scope.product.ten === '') {
        $scope.formInValid = true;
        $scope.formInValidMessage = 'Nhập đầy đủ ten';
        return;
    }
    if ($scope.product.mota === '') {
        $scope.formInValid = true;
        $scope.formInValidMessage = 'Nhập đầy đủ mota';
        return;
    }

    if(isNaN($scope.product.gia) || Number($scope.product.gia) < 0) {
        $scope.formInValid = true;
        $scope.formInValidMessage = 'Giá > 0';
        return;
    }

    $http({
      method: 'PUT',
      url: 'http://localhost:3000/SanPham/' + $routeParams.id,
      data: $scope.product
  }).then(function() {
     alert('Cập nhật thành công')
  })
  }   
  })

  app.controller('SuaLapTopProductCtrl', function($scope, $http,$routeParams) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';

    $http({
        method: 'GET',
        url: 'http://localhost:3000/LapTop/' + $routeParams.id
    }).then(function(response) {
       console.log('Láy thông tin thành công')
       $scope.product = response.data
    })
  
    $scope.onClickUpdate = function() {
      $scope.formInValid = false;
      $scope.formInValidMessage = '';
  
      if ($scope.product.id === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ID';
          return;
      }
      if ($scope.product.ten === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ten';
          return;
      }
      if ($scope.product.mota === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ mota';
          return;
      }
  
      if(isNaN($scope.product.gia) || Number($scope.product.gia) < 0) {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Giá > 0';
          return;
      }
  
      $http({
        method: 'PUT',
        url: 'http://localhost:3000/LapTop/' + $routeParams.id,
        data: $scope.product
    }).then(function() {
       alert('Cập nhật thành công')
    })
    }
  })

  app.controller('SuaSWProductCtrl', function($scope, $http,$routeParams) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';

    $http({
        method: 'GET',
        url: 'http://localhost:3000/Smartwatch/' + $routeParams.id
    }).then(function(response) {
       console.log('Láy thông tin thành công')
       $scope.product = response.data
    })
  
    $scope.onClickUpdate = function() {
      $scope.formInValid = false;
      $scope.formInValidMessage = '';
  
      if ($scope.product.id === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ID';
          return;
      }
      if ($scope.product.ten === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ten';
          return;
      }
      if ($scope.product.mota === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ mota';
          return;
      }
  
      if(isNaN($scope.product.gia) || Number($scope.product.gia) < 0) {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Giá > 0';
          return;
      }
  
      $http({
        method: 'PUT',
        url: 'http://localhost:3000/Smartwatch/' + $routeParams.id,
        data: $scope.product
    }).then(function() {
       alert('Cập nhật thành công')
    })
    }
  })

  app.controller('SuaChuotProductCtrl', function($scope, $http,$routeParams) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';

    $http({
        method: 'GET',
        url: 'http://localhost:3000/Chuot/' + $routeParams.id
    }).then(function(response) {
       console.log('Láy thông tin thành công')
       $scope.product = response.data
    })
  
    $scope.onClickUpdate = function() {
      $scope.formInValid = false;
      $scope.formInValidMessage = '';
  
      if ($scope.product.id === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ID';
          return;
      }
      if ($scope.product.ten === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ten';
          return;
      }
      if ($scope.product.mota === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ mota';
          return;
      }
  
      if(isNaN($scope.product.gia) || Number($scope.product.gia) < 0) {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Giá > 0';
          return;
      }
  
      $http({
        method: 'PUT',
        url: 'http://localhost:3000/Chuot/' + $routeParams.id,
        data: $scope.product
    }).then(function() {
       alert('Cập nhật thành công')
    })
    }
  })

  app.controller('SuaDMProductCtrl', function($scope, $http, $routeParams) {
    $scope.product = {
      id: '',
      ten: '',
      trangThaiDM: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
    $http({
      method: 'GET',
      url: 'http://localhost:3000/DanhMuc/' + $routeParams.id
  }).then(function(response) {
     console.log('Láy thông tin thành công')
     $scope.product = response.data
  })
  
    $scope.onClickCreate = function() {
      $scope.formInValid = false;
      $scope.formInValidMessage = '';
  
      if ($scope.product.id === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ ID';
          return;
      }
      if ($scope.product.ten === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Nhập đầy đủ tên';
          return;
      }
      if ($scope.product.trangThaiDM === '') {
          $scope.formInValid = true;
          $scope.formInValidMessage = 'Chọn Trạng thái';
          return;
      }
  
      $http({
          method: 'PUT',
          url: 'http://localhost:3000/DanhMuc/' +$routeParams.id,
          data: $scope.product
      }).then(function() {
         alert('Cập nhật thành công')
      })
    }
  })