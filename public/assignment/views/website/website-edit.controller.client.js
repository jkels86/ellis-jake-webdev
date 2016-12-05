(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController ($routeParams, WebsiteService) {
        var vm = this;
        var websiteId = parseInt($routeParams.wid);
        vm.userId = $routeParams['uid'];

        function init() {
            vm.website = WebsiteService.findWebsiteById(websiteId);
            vm.userwebsites = WebsiteService.findWebsitesByUser(vm.userId);
            vm.updatewebsite = updatewebsite;
            vm.deletewebsite = deletewebsite;

            function updatewebsite(name, description){
                vm.userwebsites = WebsiteService.updatewebsite(websiteId, newwebsite);
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId);
            }

            function deletewebsite(websiteId){
                vm.userwebsites = WebsiteService.deletewebsite(websiteId);
                $location.url("/user/" + vm.userId + "/website")
            }

        }
        init();

    }
})();