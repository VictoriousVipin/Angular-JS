/**
 * Created by vipintomar on 1/27/2016.
 */
angular.module('myApp',[])
.controller('myController',function($scope){
    $scope.movies = ["fasT aNd fUriOuS","hArRy poRtEr","DiE Heart","InglouRiOus BAsteRds"];
})
.filter("firstLetterCapital",function(){
    var output = [];
    return function(movie) {
        return movie.replace(/\w\S*/g, function(movie){return movie.charAt(0).toUpperCase() + movie.substr(1).toLowerCase();});
    }
})