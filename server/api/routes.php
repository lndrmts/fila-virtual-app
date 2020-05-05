<?php

require_once 'vendor/autoload.php';

$dispatcher = \FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    $r->get('/colors', 'ColorController@getColors');
    $r->post('/colors/addcolor', 'ColorController@addColor');
    $r->post('/color/{hexcode}/edit', 'ColorController@editColor');
    $r->delete('/color/{hexcode}/remove', 'ColorController@removeColor');
    $r->get('/color/{hexcode}', 'ColorController@getColor');
    $r->get('/color/{hexcode}/fromapi', 'ColorController@getColorFromApi');
});

// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);


$routeInfo = $dispatcher->dispatch($httpMethod, $uri);


switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        // ... 404 Not Found
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        // ... 405 Method Not Allowed
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
       	
       	$controller = explode('@', $handler);
       	$class = $controller[0];
       	$method = $controller[1];

       	$classname = "Api\Controllers\\".$class;
       	$data = $classname::$method($vars);
       	echo(json_encode($data));
        break;
}