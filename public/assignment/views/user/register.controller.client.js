(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        function init() {
            vm.register = register;

            function register(username, password, password2) {
                var existinguser = UserService.findUserByUsername(user.username);
                if (existinguser != null) {
                    vm.error = "Please select another username";
                } else {
                    if (password != password2) {
                        vm.error = "Passwords do not match";
                    }
                    var newuser = UserService.createUser(user);
                    $location.url("/user/" + newuser._id)
                }
            }
        }

        init;
    }
})();