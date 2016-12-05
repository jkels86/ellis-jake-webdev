/**
 * Created by Jkels on 12/3/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

    function WidgetNewController ($location, $routeParams, WidgetService) {
        var vm = this;

        vm.userId = $routeParams['uid'];
        vm.websiteId = $routeParams['wid'];
        vm.pageId = $routeParams['pid'];

        function init(){
            vm.createwidget = createwidget;
        }

        function createwidget(widgetType){
            var newwidget = WidgetService.createwidget(pageId, newwidget);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + widget._id)
        }
        init();

    }
})();