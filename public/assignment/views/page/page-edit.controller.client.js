(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location, PageService){
        var vm = this;

        var pageId = parseInt($routeParams.pid);
        var userId = parseInt($routeParams.uid);
        var websiteId = parseInt($routeParams.wid);

        function init() {
            vm.page = PageService.findPageById(pageId);
            vm.websitepages = PageService.findPageByWebsiteId(websiteId);
            vm.updatepage = updatepage;
            vm.deletepage = deletepage;
        }
        init();

        function updatepage(name, description){
            vm.websitepages = PageService.updatepage(vm.pageId, newpage);
            $location.url("/user" + vm.userId + "/website/" + vm.websiteId + "/page");
        }

        function deletepage(pageId){
            vm.websitepages = PageService.deletepage(vm.pageId);
            $location.url("/user" + vm.userId + "/website/" + vm.websiteId + "/page");
        }
    }
})();