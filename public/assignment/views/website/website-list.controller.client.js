(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController ($routeParams, WebsiteService) {
        var vm = this;

        var userId = parseInt($routeParams['uid']);

        function init() {
            vm.websites = WebsiteService.findWebsitesByUser(userId);
        }
        init();
    }
})();