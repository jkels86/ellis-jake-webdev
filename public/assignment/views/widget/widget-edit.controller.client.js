/**
 * Created by Jkels on 12/3/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

    function WidgetEditController ($location, $routeParams, WidgetService) {
        var vm = this;

        var userId = parseInt($routeParams.uid);
        var websiteId = parseInt($routeParams.wid);
        var pageId = parseInt($routeParams.pid);
        var widgetId = parseInt($routeParams.wgid);

        function init() {
            vm.widget = WidgetService.findWigetById(widgetId);
            vm.updatewidget = updatewidget;
            vm.deletewidget = deletewidget;
        }
        init();

        function updatewidget(widget) {
            vm.widget = WidgetService.updatewidget(widgetId, widget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
        }

        function deletewidget(widget){
            vm.widget = WidgetService.deletewidget(widget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
        }
    }
})();