(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController ($routeParams, WidgetService) {
        var vm = this;
        var pageId = parseInt($routeParams.pid);

        function init() {
            vm.widgets = WidgetService.findWidgetByPageId(pageId);
        }
        init();
    }
})();