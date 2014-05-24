<?php
class KijkcijferFetcher{
	private $defaultUrl	= 'https://kijkonderzoek.nl/component/com_kijkcijfers/Itemid,133/file,d1-0-0-p';
	private $skipToNth	= 3;
	private $rowCount	= 25;

	private $htmlDOM	= null;
	private $dataset	= null;

	// Construct class
	public function __construct(){
		// Require Simple HTML Dom / phpQuery
		require_once('vendor/simple_html_dom.php');
		require_once('vendor/phpQuery-onefile.php');

		// Adjust $rowCount
		$this->rowCount = $this->rowCount + $this->skipToNth;
	}

	// Grab url
	public function grab($url = null){
		// Define url
		if($url === null || ! filter_var($url, FILTER_VALIDATE_URL)){
			$url = $this->defaultUrl;
		}

		// Grab and return
		return $this->fetchUrl($url);
	}

	// Fetch data from given url
	private function fetchUrl($url){
		// Fetch data and prepare dataset
		$html = file_get_html($url);
		$data = array();

		// Set iterationcounter
		$i 	  = 0;
		foreach($html->find("table#kc_tabledata tr") as $tableChild){
			// Skip first few.
			if($i <= $this->skipToNth){
				$i++;
				continue;
			}
			// Break on limit
			if($i > $this->rowCount){
				break;
			}

			// Update dataset
			$data[$tableChild->children(0)->plaintext] = array(
				'pos'		=> $tableChild->children(0)->plaintext,
				'time'		=> $tableChild->children(1)->plaintext,
				'title'		=> $tableChild->children(2)->plaintext,
				'network'	=> $tableChild->children(3)->plaintext,
				'kdh'		=> $tableChild->children(4)->plaintext,
				'madl'		=> $tableChild->children(5)->plaintext,
				'abs'		=> str_replace('.', '', $tableChild->children(6)->plaintext),
			);

			// Add one
			$i++;
		}

		// Store dataset and return data
		$this->setDataset($data);
		return $data;
	}

	// Set dataset
	private function setDataset($data){
		$this->dataset = $data;
	}

	// Retrieve (get) dataset
	public function getDataset(){
		return $this->dataset;
	}

	// Destruct class
	public function __destruct(){

	}
}
?>