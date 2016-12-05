/**
 * Created by Jkels on 12/3/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController ($location, $routeParams, WidgetService) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];
        vm.widgetId = $routeParams['wgid'];

        function init() {
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
            vm.updatewidget = updatewidget;
            vm.deletewidget = deletewidget;
        }

        function updatewidget(widget) {
            vm.widget = WidgetService.updatewidget(widgetId, widget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
        }

        function deletewidget(widget){
            vm.widget = WidgetService.deletewidget(widget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
        }

        init();

    }
})();