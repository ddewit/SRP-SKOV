<?php
// Require class
require_once('classes/KijkcijferFetcher.php');

// Do secundary check
if(!class_exists('KijkcijferFetcher')){
	die('Missing essential class: KijkcijferFetcher');
}

// Go!
$kcFetcher 		= new KijkcijferFetcher(); 	// 
$tableData 		= $kcFetcher->grab();		// Using default url defined in there.

// JSON
$jsonData		= json_encode($tableData);

// Output and exit execution
echo $jsonData;
exit;
?>