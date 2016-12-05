(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;

        function init() {
            vm.register = register;

        }

        init();

        function register(username, password, password2) {
            var existinguser = UserService.findUserByUsername(username);
            if (existinguser != null) {
                vm.error = "Please select another username";
            } else {
                if (password != password2) {
                    vm.error = "Passwords do not match";
                }
                var newuser = {username: username, password: password};
                var user = UserService.createUser(newuser);
                $location.url("/user/" + user._id)
            }
        }
    }
})();