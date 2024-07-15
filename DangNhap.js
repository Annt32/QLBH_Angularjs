
app.controller('LoginController', function($scope, $http, AuthService) {

    $scope.submitLogin = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/taiKhoan?username=' + $scope.loginData.username + '&password=' + $scope.loginData.password
        }).then(function successCallback(response) {
            if(response.data && response.data.length > 0) {
                AuthService.setLoggedIn(true);
                alert("đây là người dùng")
                 window.location.href = '#!index-product';
            } else {
                $scope.error = true;
                $scope.errorMessage = "Username hoặc password không tồn tại";
                $scope.loginData.password = '';
            }
        })

        $http({
            method: 'GET',
            url: 'http://localhost:3000/admin?username=' + $scope.loginData.username + '&password=' + $scope.loginData.password
        }).then(function successCallback(response) {  
            if(response.data && response.data.length > 0) {
                AuthService.setLoggedIn(true);
                alert("đây là admin")
                 window.location.href = 'indexAdmin.html';
            } else {
                $scope.error = true;
                $scope.errorMessage = "Username hoặc password không tồn tại";
                $scope.loginData.password = '';
            }
        })
    };

});

app.service('AuthService', function() {
     // Kiểm tra trạng thái đăng nhập từ localStorage
     this.isLoggedIn = function() {
        return localStorage.getItem('loggedIn') === 'true';
    };

    // Thiết lập trạng thái đăng nhập
    this.setLoggedIn = function(status) {
        localStorage.setItem('loggedIn', status);
    };
});

app.controller('SomeOtherController', function($scope, AuthService) {
    $scope.isLoggedIn = AuthService.isLoggedIn;

    $scope.logout = function() {
        AuthService.setLoggedIn(false);
        window.location.href = '#!DangNhap';
    };
});






