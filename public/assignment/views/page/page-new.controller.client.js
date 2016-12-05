(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, $routeParams, PageService){
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];

        function init(){
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
            vm.createpage = createpage;
        }

        function createpage(name, description){
            newpage = PageService.createpage(websiteId, name, description);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page")
        }

        init();

    }
})();