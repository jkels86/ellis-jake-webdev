(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController ($routeParams, WebsiteService) {
        var vm = this;
        var websiteId = parseInt($routeParams.wid);
        var userId = parseInt($routeParams.uid);

        function init() {
            vm.website = WebsiteService.findWebsiteById(websiteId);
            vm.userwebsites = WebsiteService.findWebsiteByUser(userId);
            vm.updatewebsite = updatewebsite;
            vm.deletewebsite = deletewebsite;
        }
        init();

        function updatewebsite(name, description){
            vm.userwebsites = WebsiteService.updatewebsite(websiteId, newwebsite);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId);
        }

        function deletewebsite(websiteId){
            vm.userwebsites = WebsiteService.deletewebsite(websiteId);
            $location.url("/user/" + vm.userId + "/website")
        }
    }
})();