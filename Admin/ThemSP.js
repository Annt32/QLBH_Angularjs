app.controller('ThemSanPhamProductCtrl', function($scope, $http) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
  
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
          method: 'POST',
          url: 'http://localhost:3000/SanPham',
          data: $scope.product
      }).then(function() {
         alert('Tạo mới thành công')
      })
    }

    
  })

  app.controller('ThemLapTopProductCtrl', function($scope, $http) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
  
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
          method: 'POST',
          url: 'http://localhost:3000/LapTop',
          data: $scope.product
      }).then(function() {
         alert('Tạo mới thành công')
      })
    }
  })

  app.controller('ThemCProductCtrl', function($scope, $http) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
  
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
          method: 'POST',
          url: 'http://localhost:3000/Chuot',
          data: $scope.product
      }).then(function() {
         alert('Tạo mới thành công')
      })
    }
  })

  app.controller('ThemSWProductCtrl', function($scope, $http) {
    $scope.product = {
      id: '',
      ten: '',
      mota: '',
      gia: 0,
      trangThai: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
  
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
          method: 'POST',
          url: 'http://localhost:3000/Smartwatch',
          data: $scope.product
      }).then(function() {
         alert('Tạo mới thành công')
      })
    }
  })

  app.controller('ThemDMProductCtrl', function($scope, $http) {
    $scope.product = {
      id: '',
      ten: '',
      trangThaiDM: ''
    }
    $scope.formInValid = false;
    $scope.formInValidMessage = '';
  
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
          method: 'POST',
          url: 'http://localhost:3000/DanhMuc',
          data: $scope.product
      }).then(function() {
         alert('Tạo mới thành công')
      })
    }
  })