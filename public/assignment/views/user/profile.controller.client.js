
(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService){
        var vm = this;

        var userId = $routeParams['uid'];

        function init(){
            user = UserService.findUserById(userId);

            if(user != null) {
                vm.user = user;
            }
        }
        init();

        function updateuser (username, first, last){
            var updateduser = {username: username, first: first, last: last};
            vm.user = UserService.updateuser(userId, updateduser);
            $location.url("/user/" + vm.user._id)
        }

        function deleteuser(userId) {
            vm.user = UserService.deleteuser(userId);
            $location.url("/login")
        }
    }
})();