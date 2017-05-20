app.config(function($routeProvider) {
    $routeProvider
        .when("/highway/list", {
            templateUrl: "partials/highway-list.html",
            controller: "highwayListCtrl"
        })
        .when("/highway/new", {
            templateUrl: "partials/highway-new.html",
            controller: "highwayNewCtrl"
        })
        .when("/highway/view/:id", {
            templateUrl: "partials/highway-view.html",
            controller: "highwayViewCtrl"
        })
        .when("/highway/edit/:id", {
            templateUrl: "partials/highway-new.html",
            controller: "highwayEditCtrl"
        })
        .otherwise("/highway/list");
});