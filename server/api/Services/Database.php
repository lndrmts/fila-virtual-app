<?php
 
namespace Api\Services; 
use Illuminate\Database\Capsule\Manager as Capsule;
 
class Database 
{
    public function __construct() 
    {
        $capsule = new Capsule;
        $capsule->addConnection([
            'driver'       => 'mysql',
            'host'         => DB_HOST,
            'database'     => DB_NAME,
            'username'     => DB_USER,
            'password'     => DB_PASS,
            'charset'      => 'utf8',
            'collation'    => 'utf8_unicode_ci',
            'prefix'       => '',
        ]);
        $capsule->setAsGlobal();
        // Setup the Eloquent ORM… 
        $capsule->bootEloquent();
    }
}