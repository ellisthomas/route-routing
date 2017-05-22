# Route-Routing

## Project Description
[Project Specifications](https://github.com/nashville-software-school/front-end-milestones/blob/master/5-modern-frameworks/exercises/MF_ROUTE_ROUTING.md)

## Instructions

1. An Angular application module. Inject ngRoute into your applcation.
2. A config section for your application where you set up two routes.
	- Famous highway #1
	- Famous highway #2
3. Two controllers defined in your application.
4. Two partials - one bound to one of the controllers.
5. Each controller will have two scope variables.
	- $scope.highwayName
	- $scope.highwayDescription
6. You provide the name and description for each highway that you find via research.

## Technologies

- HTML5
- CSS
- JavaScript
- Bootstrap
- Angular
- ngRoute
###Code sample
```
app.controller("highway1Ctrl", function($scope) {
	$scope.highwayName = "Interstate 24 (I-24)";
	$scope.highwayDescription = "is an Interstate Highway in the Midwestern and Southeastern United States. It runs diagonally from I-57, 10 miles (16 km) south of Marion, Illinois, to Chattanooga, Tennessee, at I-75.[2] As an even-numbered Interstate, it is signed as an east–west route, though the route follows a more southeast–northwest routing. Because the routing of I-24 is diagonal, the numbering is a bit unusual as it does not completely follow the Interstate Highway System numbering conventions.";
});

```

![Screengrab](https://raw.githubusercontent.com/ellisthomas/route-routing/route/images/screengrab/Screen%20Shot%202017-05-21%20at%202.25.48%20PM.png)

![Screengrab](https://raw.githubusercontent.com/ellisthomas/route-routing/route/images/screengrab/Screen%20Shot%202017-05-21%20at%202.30.46%20PM.png)

### How to run (Node must be installed on your machine):
```
git clone git@github.com:ellisthomas/route-routing.git
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors 
[Ellis Thomas](https://github.com/ellisthomas)