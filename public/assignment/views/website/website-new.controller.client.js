/**
 * Created by Jkels on 12/3/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController ($location, $routeParams, WebsiteService) {
        var vm = this;

        var userId = parseInt($routeParams.uid);

        function init(){
            vm.websites = WebsiteService.findWebsitesByUser(userId);
            vm.createwebsite = createwebsite;
        }

        init();

        function createwebsite(name, description){
            newwebsite = WebsiteService.createwebsite(userId, name, description);
            $location.url("/user/" + userId + "/website");
        }

    }
})();