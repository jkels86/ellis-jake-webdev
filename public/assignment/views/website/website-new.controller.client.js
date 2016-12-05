/**
 * Created by Jkels on 12/3/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController ($location, $routeParams, WebsiteService) {
        var vm = this;

        vm.userId = $routeParams['uid'];

        function init(){
            vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            vm.createwebsite = createwebsite;
        }

        function createwebsite(name, description){
            newwebsite = WebsiteService.createwebsite(userId, name, description);
            $location.url("/user/" + vm.userId + "/website");
        }

        init();
    }
})();