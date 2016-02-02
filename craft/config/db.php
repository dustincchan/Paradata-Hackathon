<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */


return array(

	‘server’ => $url[“host”],
	‘user’ => $url[“user”],
	‘password’ => $url[“pass”],
	‘database’ => substr($url[“path”],1),
	‘tablePrefix’ => ‘craft’,

);
