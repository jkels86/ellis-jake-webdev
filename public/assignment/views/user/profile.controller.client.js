/**
 * Created by Jkels on 11/27/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService){
        var vm = this;

        var userId = parseInt($routeParams.uid);

        var user = UserService.findUserById(userId);

        if(user != null) {
            vm.user = user;
        }
    }
})();