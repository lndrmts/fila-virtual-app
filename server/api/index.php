<?php
// begin: mostrar erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// end: mostrar erros

require_once '../vendor/autoload.php';
require_once './config.php';

use Services\Database;

new Database;

//Database
// use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Database;
// $capsule->addConnection([
//     'driver'       => 'mysql',
//     'host'         => DB_HOST,
//     'database'     => DB_NAME,
//     'username'     => DB_USER,
//     'password'     => DB_PASS,
//     'charset'      => 'utf8',
//     'collation'    => 'utf8_unicode_ci',
//     'prefix'       => '',
// ]);
// $capsule->setAsGlobal();
// // Setup the Eloquent ORM… 
// $capsule->bootEloquent();

$fila = $capsule->Database::table('zf_line')->get();

$saldo = $capsule->Database::table('zf_cost')->orderBy('createdAt', 'desc')->first();

//Routes
require_once 'routes.php';
