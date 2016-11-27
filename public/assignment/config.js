/**
 * Created by Jkels on 11/26/16.
 */
(function(){
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
            })
            .when("/profile", {
                templateUrl: "views/user/profile.view.client.html"
            })
            .when("/website", {
                templateUrl: "views/website/website-list.view.client.html"
            })
            .when("/website/new", {
                templateUrl: "views/website/website-new.view.client.html"
            })
            .when("/website/:wid", {
                templateUrl: "views/website/website-edit.view.client.html"
            })
            .when("/page", {
                templateUrl: "views/page/page-list.view.client.html"
            })
            .when("/page/new", {
                templateUrl: "views/page/page-new.view.client.html"
            })
            .when("/page/:pid", {
                templateUrl: "views/page/page-edit.view.client.html"
            })
            .when("/widget", {
                templateUrl: "views/widget/widget-list.view.client.html"
            })
            .when("/widget/new", {
                templateUrl: "views/widget/widget-choose.view.client.html"
            })
            .when("/widget/:wgid", {
                templateUrl: "views/widget/widget-edit.view.client.html"
            })
            .otherwise({
                redirectTo: "/login"
            });

    }

})();