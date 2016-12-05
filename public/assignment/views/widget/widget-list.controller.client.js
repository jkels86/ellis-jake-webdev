(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController ($routeParams, WidgetService, $sce) {
        var vm = this;

        function init() {
            vm.userId = $routeParams['uid'];
            vm.pageId = $routeParams['pid'];
            vm.websiteId = $routeParams['wid'];
            vm.checksafehtml = checksafehtml;
            vm.checksafeyoutubeurl = checksafeyoutubeurl;
            vm.checksafeimageurl = checksafeimageurl;
            vm.widgets = WidgetService.findWidgetByPageId(vm.pageId);

            function checksafehtml(html){
                return $sce.trustAsHtml(html);
            }

            function checksafeyoutubeurl(url){
                var parts = url.split('/');
                var id = parts[parts.length - 1];
                url = "https://www.youtube.com/embed/" + id;
                return $sce.trustAsResourceUrl(url);
            }

            function checksafeimageurl(url){
                return $sce.trustAsResourceUrl(url);
            }
        }
        init();
    }
})();