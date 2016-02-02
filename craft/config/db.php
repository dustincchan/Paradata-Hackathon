<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

$url=parse_url(getenv(“CLEARDB_DATABASE_URL”));

return array(

	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	'server' => $url["host"],

	// The name of the database to select.
	'user' => $url["user"],

	// The database username to connect with.
	'password' => $url["pass"],

	// The database password to connect with.
	'database' => substr($url[“path”],1),

	// The prefix to use when naming tables. This can be no more than 5 characters.
	'tablePrefix' => 'craft',

);
