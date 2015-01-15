app.directive('loadingAnimation',   ['$http' ,function ($http) {
    return {
        templateUrl : 'js/components/loadingAnimation/template.html',
        restrict: 'A',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v) {
                if(v){
                    elm.show();
                }else{
                    elm.hide();
                }
            });
        }
    };
}]);