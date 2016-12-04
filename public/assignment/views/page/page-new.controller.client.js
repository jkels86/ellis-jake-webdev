(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, $routeParams, PageService){
        var vm = this;

        var userId = parseInt($routeParams.uid);
        var websiteId = parseInt($routeParams.wid);

        function init(){
            vm.pages = PageService.findPageByWebsiteId(websiteId);
            vm.createpage = createpage;
        }

        init();

        function createpage(name, description){
            newpage = PageService.createpage(websiteId, name, description);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page")
        }
    }
})();