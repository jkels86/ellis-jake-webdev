(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location, $routeParams, PageService){
        var vm = this;

        vm.pageId = $routeParams['pid'];
        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
            vm.websitepages = PageService.findPageByWebsiteId(vm.websiteId);
            vm.updatepage = updatepage;
            vm.deletepage = deletepage;
        }

        function updatepage(name, description){
            vm.websitepages = PageService.updatepage(vm.pageId, newpage);
            $location.url("/user" + vm.userId + "/website/" + vm.websiteId + "/page");
        }

        function deletepage(pageId){
            vm.websitepages = PageService.deletepage(vm.pageId);
            $location.url("/user" + vm.userId + "/website/" + vm.websiteId + "/page");
        }

        init();
    }
})();