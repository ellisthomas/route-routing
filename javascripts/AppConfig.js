app.config(function($routeProvider) {
    $routeProvider
        .when("/highway/home", {
            templateUrl: "partials/highway-home.html",
            controller: "highwayHomeCtrl"
        })
        .when("/highway/1", {
            templateUrl: "partials/highway-1.html",
            controller: "highway1Ctrl"
        })
        .when("/highway/2", {
            templateUrl: "partials/highway-2.html",
            controller: "highway2Ctrl"
        })
        .when("/highway/edit/:id", {
            templateUrl: "partials/highway-new.html",
            controller: "highwayEditCtrl"
        })
        .otherwise("/highway/home");
});